// LM Studio system-message 合并代理
// 解决 Qwen3.x Jinja 模板 "System message must be at the beginning" 报错：
// 把请求里所有 system/developer 消息合并成一条放到 messages[0]，再转发给 LM Studio。
// 用法: node lmstudio-proxy.mjs [本地端口] [LM Studio端口]   默认 8765 -> 1234
import http from "node:http";

const LOCAL_PORT = Number(process.argv[2] || 8765);
const UPSTREAM_PORT = Number(process.argv[3] || 1234);

function mergeSystem(messages) {
  if (!Array.isArray(messages)) return messages;
  const sys = [];
  const rest = [];
  for (const m of messages) {
    if (m.role === "system" || m.role === "developer") sys.push(m);
    else rest.push(m);
  }
  if (sys.length === 0) return messages;
  const content = sys
    .map((m) => (typeof m.content === "string" ? m.content : JSON.stringify(m.content)))
    .join("\n\n");
  return [{ role: "system", content }, ...rest];
}

const server = http.createServer((req, res) => {
  let body = [];
  req.on("data", (c) => body.push(c));
  req.on("end", () => {
    const raw = Buffer.concat(body);
    let out = raw;
    if (req.method === "POST" && raw.length) {
      try {
        const j = JSON.parse(raw);
        if (j.messages) {
          j.messages = mergeSystem(j.messages);
          out = Buffer.from(JSON.stringify(j));
        }
      } catch { /* 非 JSON 请求原样转发 */ }
    }
    const up = http.request(
      { host: "127.0.0.1", port: UPSTREAM_PORT, path: req.url, method: req.method,
        headers: { ...req.headers, "content-length": out.length } },
      (ur) => {
        res.writeHead(ur.statusCode, ur.headers);
        ur.pipe(res); // 流式响应原样透传
      }
    );
    up.on("error", () => { res.writeHead(502); res.end("upstream error"); });
    up.end(out);
  });
});

server.listen(LOCAL_PORT, "127.0.0.1", () =>
  console.log(`proxy ready: 127.0.0.1:${LOCAL_PORT} -> 127.0.0.1:${UPSTREAM_PORT}`)
);

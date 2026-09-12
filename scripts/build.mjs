// 每日聚合两个公益站探活 hub 的 live/sites 数据，生成 site/data.json 快照
// 用法: node scripts/build.mjs  (由 .github/workflows/daily.yml 定时调用)
import { writeFileSync } from "node:fs";

const HUBS = [
  {
    source: "ai-welfare-hub",
    hubUrl: "https://github.com/wynx1123/ai-welfare-hub",
    base: "https://raw.githubusercontent.com/wynx1123/ai-welfare-hub/main/data",
  },
  {
    source: "ai-coding-welfare",
    hubUrl: "https://github.com/panxunying/ai-coding-welfare",
    base: "https://raw.githubusercontent.com/panxunying/ai-coding-welfare/main/data",
  },
];

async function getJson(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return await res.json();
  } catch (e) {
    console.warn(`fetch failed: ${url} (${e.message})`);
    return null;
  }
}

// 官方免费渠道（2026-09 核实，静态维护）
const OFFICIAL = [
  { name: "Gemini CLI", free: "60 次/分 · 1000 次/天，Gemini 3，不绑卡", url: "https://github.com/google-gemini/gemini-cli", note: "README 原文核实" },
  { name: "OpenRouter :free", free: "20 RPM；充 ≥$10 后 1000 次/天终身", url: "https://openrouter.ai", note: "官方限制页核实" },
  { name: "Cloudflare Workers AI", free: "10,000 neurons/天，UTC 零点重置", url: "https://developers.cloudflare.com/workers-ai/", note: "官方 pricing 核实" },
  { name: "Cerebras", free: "注册送 $5 credits，全模型", url: "https://cerebras.ai", note: "官方 pricing 核实" },
  { name: "智谱 GLM", free: "新用户 2000 万 token 永久；GLM-4-Flash 免费无上限", url: "https://open.bigmodel.cn", note: "二手（论坛盘点），登录自查" },
  { name: "火山引擎豆包", free: "每日 200 万 token（限自有业务）", url: "https://www.volcengine.com", note: "二手，登录自查" },
  { name: "阿里云百炼", free: "每模型 100 万 token（90 天活动）", url: "https://help.aliyun.com/zh/model-studio/new-free-quota", note: "官方文档核实" },
  { name: "ModelScope", free: "api-inference 约 2000 次/天", url: "https://modelscope.cn", note: "口径未二次核实" },
  { name: "Kiro Free (AWS)", free: "50 credits/月，含 Claude Sonnet 4.5，不绑卡", url: "https://kiro.dev/pricing", note: "官方 pricing 核实" },
  { name: "GitHub Copilot Free", free: "2000 补全 + 50 chat/月，Claude/GPT-5 mini 自动分配", url: "https://github.com/features/copilot/plans", note: "官方页核实" },
  { name: "chatanywhere", free: "每周 5 万点 + 每日 100 次（GPT/DeepSeek）", url: "https://github.com/chatanywhere/GPT_API_free", note: "官方 README 核实" },
];

const INTEL = [
  { name: "linux.do 公益推广标签", url: "https://linux.do/tag/1515-tag/1515", type: "公益站一手主帖（需登录）" },
  { name: "ai-welfare-hub live.json", url: "https://github.com/wynx1123/ai-welfare-hub", type: "每 6h 自动探活" },
  { name: "ai-coding-welfare", url: "https://github.com/panxunying/ai-coding-welfare", type: "日更导航 + RSS" },
  { name: "cheahjs/free-llm-api-resources", url: "https://github.com/cheahjs/free-llm-api-resources", type: "国际免费 API 总表 29k star" },
  { name: "r/LocalLLaMA", url: "https://www.reddit.com/r/LocalLLaMA/", type: "限额变动第一时间情报" },
  { name: "@iBigQiang 强子手记", url: "https://x.com/iBigQiang", type: "公益站实测（带轻 aff）" },
  { name: "HN Algolia 搜 free credits", url: "https://hn.algolia.com/?q=free+credits", type: "创始人 promo code" },
];

const stations = new Map();

for (const hub of HUBS) {
  const [sites, live] = await Promise.all([
    getJson(`${hub.base}/sites.json`),
    getJson(`${hub.base}/live.json`),
  ]);
  if (!sites || !live) continue;
  const liveById = new Map((live.sites || []).map((s) => [s.id, s]));
  for (const site of sites.sites || []) {
    const cur = stations.get(site.id) || { id: site.id };
    const c = site.credits || {};
    cur.name = site.name || cur.name;
    cur.homeUrl = site.homeUrl || cur.homeUrl;
    cur.signupUrl = site.signupUrl || cur.signupUrl;
    cur.signup = c.signup ?? cur.signup ?? null;
    cur.invite = c.invite ?? cur.invite ?? null;
    cur.checkin = c.dailyCheckin ?? cur.checkin ?? null;
    cur.unit = c.signup != null && c.signup > 1000 ? "积分" : "$";
    cur.recommended = site.recommended || cur.recommended || false;
    cur.sources = [...(cur.sources || []), hub.source];
    const l = liveById.get(site.id);
    if (l && (!cur.checkedAt || l.checkedAt > cur.checkedAt)) {
      cur.online = l.online ?? null;
      cur.latencyMs = l.latencyMs ?? null;
      cur.registerOpen = l.registerOpen ?? null;
      cur.checkinEnabled = l.checkinEnabled ?? null;
      cur.loginMethods = (l.loginMethods && l.loginMethods.length) ? l.loginMethods : (cur.loginMethods || []);
      cur.mirrors = (l.mirrors && l.mirrors.length) ? l.mirrors : (cur.mirrors || []);
      cur.checkedAt = l.checkedAt;
    }
    stations.set(site.id, cur);
  }
}

const data = {
  generatedAt: new Date().toISOString(),
  hubSources: HUBS.map((h) => ({ source: h.source, url: h.hubUrl })),
  stations: [...stations.values()].sort(
    (a, b) => (b.online === true) - (a.online === true) || (b.signup ?? 0) - (a.signup ?? 0)
  ),
  official: OFFICIAL,
  intel: INTEL,
  stats: {
    total: stations.size,
    online: [...stations.values()].filter((s) => s.online === true).length,
  },
};

writeFileSync("site/data.json", JSON.stringify(data, null, 2));
console.log(`site/data.json written: ${data.stats.online}/${data.stats.total} stations online`);

# 免费 Token 渠道调研 · 最终版（验证式）

> 核实日期：2026-09-11。本版与前两版的区别：**每一条都经过验证**——要么抓到官方页面原文，要么今天实测了站点 `/api/status`，要么明确标注"未能核实"。没有验证依据的猜测一律不写数字。三个来源：官方文档原文核实、公益站当日探活、旗舰模型正规免费途径逐项核查。

---

## 一、今天验证过、直接能上手的公益中转站（免费旗舰模型主力）

探活数据：`wynx1123/ai-welfare-hub` 的 `data/live.json`，快照 **2026-09-11 10:43 UTC**，16 站全部在线。第一梯队当日二次人工验证。

### 第一梯队

| 站点 | 今日验证方式 | 额度 | 模型/备注 |
|---|---|---|---|
| **AgentRouter** agentrouter.org | ✅ /api/status 原文（版本 init-20260907） | 注册 $100 + 每日签到 $25 + 邀请 $50 | Claude/GPT/DeepSeek/GLM-4.5，支持 Claude Code/Codex/Roo。⚠️ Claude/GPT 每日 0:00/8:00/16:00 三时段限量放池要抢，抢不到切 GLM（近乎无限）。GitHub/LinuxDO OAuth 登录 |
| **DoCode** docode.cc | ✅ /api/status 原文 | 注册 $300 + 邀请 $60，签到已关闭 | 主打 Claude 分组；9-10 公告称 GPT 通道不稳，推荐 grok 或 cc 特殊分组 |
| **kktoken** kktoken.cc | ✅ /api/status 原文 | 注册 $100 + 每日签到 $20 | 主打 Claude Opus 全家桶，需浏览器注册防 CF |
| **NOFX** nofx.one | ✅ 首页原文 | 注册 $20 + 每日签到 $5 + 任务最高 $400 | ⚠️ 积分 7 天有效期，有消耗滚动续期，不适合囤 |
| **肖恩AI** free.supxh.xin | ✅ 首页原文（周年庆至 9-12） | 注册 5000 点 + 每日签到 1000–3000 | 探活仓库自己标注"社区反馈存活率低"，当备用 |

第二梯队（探活在线，额度数字为二手）：GoRouter（延迟最低 225ms）、维云 vsllm（163ms，69 个模型，最稳）、TaBiAI（专供 Claude）、RawChat（每日 $50 共享池抢池制）、JustDoWork（证书校验异常，谨慎）。

**接入方法（所有站通用，New API 标准）**：注册 → 建令牌 → 客户端把 Base URL 换成站点域名。Claude Code 用环境变量：
```
ANTHROPIC_BASE_URL=https://agentrouter.org
ANTHROPIC_AUTH_TOKEN=你的令牌
```
Codex/Cline/Roo 同理换 OpenAI 兼容端点 `https://站点域名/v1`。

**存活追踪**：直接读 `raw.githubusercontent.com/wynx1123/ai-welfare-hub/main/data/live.json`（每 6 小时自动更新，看时间戳）；人工核验型清单用 `haha0510/llm-api-public-stations`（含 Claude Code/Codex 接入教程）。新站/兑换码一手来源：登录 linux.do 搜"公益站"按最新排序（论坛需登录，外部搜索引擎抓不到）。

## 二、官方免费硬渠道（原文核实 ✅ / 失效 ❌）

| 渠道 | 状态 | 官方原文数字 |
|---|---|---|
| **Gemini CLI**（个人 Google 账号 OAuth） | ✅ 核实 | 60 req/min、**1000 req/day**，Gemini 3（flash+pro 混合），不绑卡 |
| **OpenRouter `:free` 模型** | ✅ 核实 | 20 RPM；未充值 50 次/天；**累计充值 ≥$10 终身 1000 次/天**（官方源码常量原文） |
| **Cloudflare Workers AI** | ✅ 核实 | **10,000 neurons/天免费**，UTC 零点重置，超出 $0.011/千 neurons |
| **Cerebras** | ✅ 核实 | 注册送 **$5** credits 用全部模型；免费档限速为 Developer 档的 1/10 |
| Gemini API 免费层 | ⚠️ 已变更 | 静态限额表已从文档移除，只能登录 aistudio.google.com/rate-limit 查个人限额 |
| **GitHub Models** | ❌ **已退役** | 官方原文："As of July 30, 2026, GitHub Models has been fully retired"。还在流传的"GitHub Models 白嫖"教程全部失效 |
| Groq / 智谱 Flash / 硅基流动赠送 / ModelScope / NVIDIA NIM | ⚠️ 未能核实 | 官方页 403 或 JS 渲染抓不到，前两版数字不作保证，用前登录自查 |

国内官方免费（v1 调研，未在本轮二次核实）：智谱 GLM-Flash 系列、硅基流动、ModelScope（2000 次/天口径）、商汤、书生——以登录后的官网为准。

## 三、正规免费用到旗舰模型（不碰中转站）

| 途径 | 状态 | 内容 |
|---|---|---|
| **Kiro Free**（AWS Agentic IDE，kiro.dev/pricing） | ✅ 原文核实 | $0/月 **50 credits，明确含 Claude Sonnet 4.5**；社交登录/AWS Builder ID，不绑卡。个人白嫖真 Claude 做编程 agent 的最实在正规渠道 |
| **GitHub Copilot Free** | ✅ 原文核实 | 每月 **2000 次补全 + 50 次 chat** + 少量 AI Credits；模型自动分配（官方确认池含 Haiku 4.5、GPT-5 mini），不能手选，不绑卡 |
| **claude.ai 免费版** | ✅ 原文核实 | 免费用，5 小时滚动窗口限流（未公布具体条数），不绑卡 |
| **LMArena**（已迁 arena.ai） | ✅ 页面核实 | 不登录直接让前沿模型回答（Battle/Direct 模式），评测用途等于免费聊旗舰；数据会被研究、可能降智 |
| **Trae Free**（字节） | ✅ 原文核实 | 限量 Basic usage + 无限补全 + SOLO 模式 + 7 天 Pro 试用（之后 $10/月） |
| Cursor Hobby | ✅ 原文核实 | "Limited Agent requests + Composer"，不绑卡，无具体数字 |
| ChatGPT 免费版 | ⚠️ 官方页 403 | 存在 Free 档，具体限额未核实到数字 |
| Codex CLI | ✅ 核实 | **无官方免费档**——CLI 开源但模型要订阅或自带 key；免费组合 = Codex CLI + Gemini CLI 额度/Groq 等免费 API |
| 云厂商 credits（AWS/Azure/GCP） | ❌ 不推荐 | 都要绑卡，GCP $300/Azure $200 为二手数字，易误扣费 |

学生党补充（v2 已核）：GitHub Student Pack——Copilot 免费、Azure $100 免绑卡、Camber 在读期间每月 5 GPU 小时。

## 四、避坑（本轮新确认）

- **GitHub Models 已死**（2026-07-30 退役），旧教程别看。
- **Qwen Code CLI 免费档已死**（2026-04-15 官方停服）。
- `bubblevv/ai-api-gongyi-nav` 导航更新停在 2026-07，多处过期，只作参考。
- TrueSOTA 注册不给额度且 /api/status 404；NOFX 积分 7 天过期。
- B.AI（孙宇晨 b.ai）：注册送 50 万积分真实存在，但社区实测有降智嫌疑、积分实际价值极低（NodeSeek 估算 ≈$0.5），盈利靠 USDT 沉淀理财。薅注册即弃，不充值不上隐私。
- 云 credits 路线全部要绑卡，不是零门槛。

## 五、最终建议路线

1. **日常编程 agent（长期稳）**：Gemini CLI（1000 次/天）+ GitHub Copilot Free（2000 补全+50 chat/月）+ Kiro Free（Claude Sonnet 4.5）。
2. **API 型免费额度**：OpenRouter（一次性充 $10 终身 1000 次/天 free 模型）+ Cloudflare Workers AI（10k neurons/天）+ Cerebras $5。
3. **要跑 Claude/GPT 旗舰 API**：AgentRouter（三时段抢池）+ DoCode（$300）+ kktoken 三开轮着签到，探活 JSON 每天看一眼。
4. **情报源**：wynx1123/ai-welfare-hub（自动探活）+ linux.do 福利板块（登录后按最新排序）。

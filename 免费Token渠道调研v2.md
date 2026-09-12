# 免费 Token 渠道调研 v2（深度版）

> 调研日期：2026-09-11。两个研究代理并行深挖的结果，信息源含官方文档原文、主流媒体报道、社区实测、GitHub 自动探活仓库。标注「未验证」的数字请自行核实。

---

## 〇、你正在用的「bai」到底是什么

**B.AI（官网 b.ai，X 账号 @BAI_AGI）** —— 孙宇晨 2026 年 4 月底香港演讲发布、5 月 1 日正式官宣的**区块链大模型 API 聚合中转站**（OpenRouter 竞品）。

- **形态**：网页对话 + 一个 API Key 调用 Claude/GPT/Gemini/智谱/Kimi/Minimax 等；钱包签名或 Google 登录；支持 USDT 结算（有折扣）、x402/8004 协议、AI Agent 经济身份（BAIClaw）。
- **免费逻辑**：2026-05-01 起新用户**注册零门槛送 50 万积分**（不绑手机、不绑交易所、不充值），官方宣称「一天补贴 10 万元人民币 / 100 亿 Token」。注册用户号称 170 万+。
- **引流逻辑**：不是拉你注册 HTX，而是①制造 TRON 生态「区块链 + AI Agent」叙事流量；②吸引充值的 USDT 沉淀在平台内做 DeFi 理财收益——这是真实盈利模式。
- **必须知道的坑**：
  - 腾讯云开发者社区有技术作者实测「降智」：界面标 Gemini 3.1 Pro / Claude 4.6 Opus，身份探针一问模型自认版本不符，疑似路由到低版本模型。
  - NodeSeek 用户估算 50 万积分实际仅约 $0.5 的用量，积分怎么折算官方不透明。
  - 证券时报 2026-05-12 起底文章点名此类模式：封号、跑路、随意涨价 3-4 倍、数据黑盒、部分中转站发现恶意注入甚至盗取加密资产。
  - **结论**：当玩具可以（真免费、零门槛是真的），别输敏感代码/数据，别充值，生产用途走官方 API。
- **同赛道竞品**（加密 + AI 中转引流）：傅盛 EasyRouter（送 400 积分、全线 85 折）、WLFI/WorldRouter（特朗普系，USD1 结算）。

---

## 一、白嫖天花板：官方硬渠道（长期稳，优先用这三个）

| 渠道 | 额度 | 说明 |
|---|---|---|
| **Gemini CLI** | **60 次/分钟、1000 次/天**，Gemini 3 系列，1M 上下文 | 个人 Google 账号 OAuth 即可，无需绑卡。目前个人免费额度天花板 |
| **OpenRouter `:free` 模型** | 未充值 50 次/天；**历史累计充值 ≥$10 终身 1000 次/天**（用完不扣钱） | 一次充 $10 解锁终身高额度，含 DeepSeek/Qwen/GLM free 变体 |
| **Cloudflare Workers AI** | **每天 10,000 neurons 免费**，UTC 零点重置 | Llama、gpt-oss-120b、Qwen3、GLM、Whisper 等，适合挂 Workers 做 API |

次一级的官方免费：Google AI Studio 免费层（不绑卡）、Groq 免费档（部分模型 30 RPM/1000 RPD）、Cerebras（注册送 $5）、HuggingFace（免费 $0.10/月，PRO $2/月送 $2）。

**国内官方免费**（v1 已列，仍有效）：智谱 GLM-Flash 系列完全免费、硅基流动、ModelScope 2000 次/天、商汤 60 万点/周、书生免费 key、讯飞 lite。

---

## 二、公益站生态第一梯队（linux.do 系，快照 2026-09-11 全部在线）

额度口径为注册/签到/邀请合计美元额度，随时会变：

| 站点 | URL | 额度 | 备注 |
|---|---|---|---|
| **AgentRouter** | agentrouter.org | 注册 $100 + 邀请 $50 + 签到 $25 ≈ **$175** | 生态里口碑最好的头部站，Claude Code 接入教程多 |
| **肖恩AI** | free.supxh.xin | 注册 5000 积分 + **每日签到 1000–3000** + 邀请 2000 | 签到回报最高 |
| **DoCode** | docode.cc | 注册 + 邀请 ≈ **$360**（未验证） | |
| **kktoken** | kktoken.cc | 注册 $100 + 签到 $20 | |
| **NOFX** | nofx.one | 注册 $20 + **每日签到 $5** + 分享最高 $35 | 30 天零消耗清空 |
| **TaBiAI** | tabitoken.com | 注册 $100 + 邀请 $20 | |
| **GoRouter** | gorouter.app | 注册 $50 + 邀请 $20 | |
| **Liminality** | beizhi.sylu.cc | 多款 0 额度免费模型 + 每日签到 | |
| **RawChat** | new.sharedchat.cc | 每日共享池 $50 | |
| **小学生公益站** | xxs.l.cd | 邀请 +$20、加群 +$50 | |

**探活工具（跟新站就靠它）**：
- github.com/wynx1123/ai-welfare-hub —— GitHub Actions 每 6 小时自动检测 15+ 站存活
- github.com/haha0510/llm-api-public-stations —— 20 站清单
- github.com/bubblevv/ai-api-gongyi-nav、1sh1ro/ai-api-zhongzhuan —— 大全式导航

**铁律**：不要充值、不要发隐私/密钥、不要绑真付费 key；站点随时跑路，额度是营销数字。

---

## 三、避坑名单（半死/已死/陷阱）

- **Qwen Code CLI 的 Qwen OAuth 免费档（原每天 2000 次）已于 2026-04-15 官方停服**——网上还在推的文章全部过时了。这是本轮最重要的时效情报。
- deanxv/lmarena2api：已归档（2025-06 停更）；tawer-blog/lmarena-2api：弃坑。LMArena 反代整体在风控加强后大量死亡。
- TrueSOTA：签到了 $0，形同虚设。可萌中转站：活动 2026-08-28 截止。维云：注册未开放。
- JustDoWork（api.justwoker.icu）：HTTPS 证书异常，风险中高。
- 假清单仓库陷阱：GitHub 有 README 全指向同一个 zip 的"免费 API 清单"仓库（投毒钓鱼），只认高 star 活跃仓库。

## 四、逆向免费项目现状（风险高，如实记录）

| 项目 | Star | 状态 |
|---|---|---|
| xtekky/gpt4free | 66.7k | 活跃，支持 PerplexityLabs/Gemini/MetaAI/Pollinations 等，部分需 cookies |
| foxhui/WebAI2API | 1.3k | 活跃（2026-07 更新），LMArena/ChatGPT/豆包/Sora 等 11 站转 OpenAI 兼容 API，多窗口并发+账号隔离 |
| CloudWaddie/LMArenaBridge | 404 | 活跃 |

风险：违反 ToS、封号、法律灰色。生产别用。

## 五、学生党隐藏硬渠道

GitHub Student Pack：Copilot 免费不限量补全、Azure $100 免绑卡、Heroku $13/月×24 个月、**Camber 学生计划在读期间每月 40 CPU 小时 + 5 GPU 小时（可经 MCP 从 Cursor/Claude Code 调用）**。

## 六、低价但值得（不算免费）

- **智谱 GLM Coding Plan：$18/月起**，明确支持 Claude Code/Cline/OpenCode，非高峰时段（新加坡 14:00–18:00 之外）按 50% 费率扣，等于额度翻倍。这是目前接 Claude Code 最便宜的正规途径之一。

---

## 最终实操路线

1. **日常长跑**：Gemini CLI（1000 次/天）+ OpenRouter（充 $10 终身 1000 次/天）+ Cloudflare Workers AI + 国内智谱 Flash/硅基流动/ModelScope。
2. **要跑 Claude/GPT 旗舰**：公益站第一梯队（AgentRouter、肖恩AI）轮流签到，探活仓库跟新，当消耗品用。
3. **接 Claude Code 想稳定**：GLM Coding Plan $18/月。
4. **B.AI 之类加密中转站**：薅注册积分即可，不充值、不上隐私，默认它可能降智。
5. **情报源**：linux.do 福利板块（需登录）+ ai-welfare-hub 自动探活 + GitHub 订阅导航仓库 releases。

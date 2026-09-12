# 免费 Token / 免费大模型 API 渠道调研

> 调研日期：2026-09-11。额度数字随时会变，用之前务必去官方页面确认。

## 一、先说结论（TL;DR）

免费 token 主要分四类，可靠程度从高到低：

1. **官方免费额度/免费模型**（最稳，推荐主力）：国内厂商普遍大方，硅基流动、ModelScope、智谱 Flash 系列、商汤、书生等都长期给免费额度。
2. **知名开源公益项目**（较稳）：如 chatanywhere/GPT_API_free（42k star），给免费转发的 GPT/DeepSeek。
3. **公益中转站**（不稳定，随手用用可以，别依赖）：大量 New API 架构的站点，注册送 $1~$250、签到送额度，今天开明天跑路的很多。
4. **社区/自媒体引流渠道**（信息源，不是直接白嫖）：linux.do、NodeSeek、Telegram 频道、QQ 群、公众号——中转站的兑换码和新人活动基本都在这些地方发。

## 二、官方免费额度（最推荐）

### 国内

| 平台 | 免费情况 | API 地址 |
|---|---|---|
| 硅基流动 SiliconFlow | 注册送额度（约 ¥14），小模型基本免费随便用，1000 RPM | `api.siliconflow.cn/v1` |
| ModelScope 魔搭（阿里） | 2000 次/天，有 DeepSeek/GLM/Qwen 全系大杯模型 | `api-inference.modelscope.cn/v1/` |
| 智谱 BigModel | GLM-Flash 系列**完全免费** | `open.bigmodel.cn/api/paas/v4/` |
| 讯飞星火 | lite 模型免费（2 QPS） | `spark-api-open.xf-yun.com/v1` |
| 商汤 SenseNova | 6 万点/5 小时，60 万点/周，模型不少 | `token.sensenova.cn/v1` |
| 书生 Intern AI（上海AI实验室） | 免费 key，有效期 6 个月，10 RPM | `chat.intern-ai.org.cn/api/v1` |
| 阿里百炼 DashScope | 新用户送大量 token（历史上是 100 万~1000 万），Qwen 系列新模型短期免费 | dashscope |
| Google AI Studio | Gemini 免费档（按模型有 RPM/RPD 限制），**免费额度里性价比最高的之一** | generativelanguage.googleapis.com |

### 国际

| 平台 | 免费情况 |
|---|---|
| Google AI Studio | Gemini Flash 系列免费档，量大 |
| Groq | 免费档跑开源模型（Llama 等），速度极快 |
| OpenRouter | 标 `:free` 的模型免费，每天/每月有次数上限 |
| GitHub Models | 用 GitHub 账号免费试主流模型，限速低但不要钱 |
| Cloudflare Workers AI | 每天 10k neurons 免费额度 |
| NVIDIA NIM | 注册送 1000 credits |
| Mistral | La Plateforme 免费实验档 |
| Cerebras | 免费档，速度极快 |

## 三、知名公益项目

- **chatanywhere / GPT_API_free**（github.com/chatanywhere/GPT_API_free，42.3k star）
  - 去 chatanywhere.tech 用 GitHub 账号注册拿 key。
  - 免费版：每周 5 万点，每天 100 次请求（gpt 和 embedding 分开算）；可用 gpt-4o、gpt-5（弱化）、DeepSeek、gpt-3.5、embedding。
  - 国内直连：`https://api.chatanywhere.tech`，OpenAI 协议兼容，改个 Host 就能用。
  - 仅限个人非商业用途。

## 四、公益中转站（New API 类，"引流狗"聚集地）

这一类就是典型的引流模式：**注册送美元额度 + 签到送额度 + 拉新送额度 + 加 QQ 群领体验卡**，站点本体是 New API / one-api 架构的转发站，上游来路不明。

导航仓库（收录了几十个站，直接看这两个）：
- **bubblevv/ai-api-gongyi-nav** — 「AI API 公益中转站导航」，收录 50+ 站，带额度说明和倍率
- **1sh1ro/ai-api-zhongzhuan** — 同类导航
- **wynx1123/ai-welfare-hub** — 用 GitHub Actions 每 6 小时自动检测 15+ 个站点的存活状态（这个思路很实用，站点死得快）
- **yangqi1309134997-coder/free-model-links** — 中转站网址导航源码

典型站点举例（2026-09 时点的额度，随时会变/跑路）：
- aiok：注册送 $250（作者自己标注"不稳定"）
- tabitoken：送 $120（只有 Claude Code 类模型）
- gorouter：送 $70（GitHub 登录）
- 帮帮：送 $100 + 签到 $60（曾一度关闭）
- DGB：送 $80 + 签到 $40
- agentrouter：送 $100（可能已关闭）
- NianHua / JianZhiLe / Orbelis 等：签到 $0.2~$60/天 不等
- 很多站"进 QQ 群领 $2~$50 体验卡"——这就是引流本体，群里的主要目的是给你推付费套餐

## 五、社区/自媒体渠道（信息源）

- **linux.do 论坛** — 目前国内"资源党"最集中的地方，「福利羊毛」「搞七捻三」板块每天有中转站新站、兑换码、公益站通报。想追新站就看这里。
- **NodeSeek** — 类似定位，VPS/羊毛/资源板块。
- **Telegram** — 搜"公益 API""AI 中转"有大量频道，主要是导航站自动搬运 + 站长发兑换码；风险最高，钓鱼链接多。
- **QQ 群** — 绝大多数中转站的激活/领额度入口（"进群领 $50"），群里同时推低价付费套餐，这就是它们的商业模式。
- **公众号/知乎/B站** — 搜"免费 GPT API""白嫖 Claude"有大量引流号，内容基本是教你去上面的中转站注册，文章里全带自己的 aff 推广码——它们赚的就是拉新返利，所以内容永远在更新"送额度最大的站"。

## 六、风险与坑（重要）

1. **数据安全**：中转站能看到你发的全部请求内容。导航站自己都写明"不要上传隐私数据、密钥、敏感文件"。**永远不要在中转站后面再挂你的私人密钥或真实业务数据。**
2. **跑路与夸大**：送 $250 的站基本等于没有额度——倍率（如 10 倍率）一乘，实际能用很少；不少站注册完就关。
3. **上游来路不明**：有些"低价 Claude/GPT"上游是盗刷信用卡或盗号订阅，站随时被封，你也分不到责任之外的好处但会被断供。
4. **仿冒/投毒仓库**：调研中发现 GitHub 有假"免费 API 清单"仓库（如某个 nherx/free-llm-api-resources），README 所有链接都指向一个 zip，典型的钓鱼投毒。只认高 star、更新活跃的仓库。
5. **违反 ToS**：Web 反代转 API（Windsurf/Cursor/网页转 API 类教程）违反服务条款，账号会被封。
6. **合规**：免费版公益站几乎都禁止商用；正经用途（比如你的项目）建议主力用官方免费档，中转站只做临时测试。

## 七、给你的实操建议

- **长期能用的主力**：智谱 Flash（免费）、硅基流动、ModelScope、Google AI Studio、chatanywhere 免费版。
- **临时测试/试新模型**：挑 linux.do 上当天活跃的公益站，注册即用，用完即弃。
- **别在这些站后面传任何隐私**。
- 想持续追踪新羊毛：订阅 wynx1123/ai-welfare-hub 的自动存活检测，或直接每天刷 linux.do 福利板块。

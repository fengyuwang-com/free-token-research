# 本地AI编码环境 使用说明

## 一键召唤

双击 **`召唤本地AI.bat`**（就在本目录）。它做三件事：

1. 启动 LM Studio 服务（端口 1234）——如果 LM Studio 本体没开，`lms` 会自动唤醒它
2. 加载 Qwen3.5-4B 无审查模型（64K 上下文，显存占用约 6.5/8 GB，已加载会跳过）
3. 启动代理桥（8765 → 1234）——极简 node 脚本，作用有两个：
   - 把 agent 发来的多条 system 消息合并成一条（解决 Qwen3 的 Jinja 模板限制）
   - 自动预填空思考块，**关掉模型思考**，回答快 10 倍以上

看到 `[OK] 全链路就绪` 就能用了。

## 两种用法

```bash
# 方式一：交互模式（推荐）
pi
# 进去后输 /model，选 lmstudio/qwen3.5-4b

# 方式二：单问模式
pi -p --model lmstudio/qwen3.5-4b "你的问题"
```

也可以在 bat 窗口里直接输入 `召唤本地AI pi`，启动完自动进 pi。

## 各部件在哪

| 部件 | 位置 |
|---|---|
| 一键启动脚本 | `D:\FengProj\free-token-research\召唤本地AI.bat` |
| 代理桥脚本 | `D:\FengProj\free-token-research\scripts\lmstudio-proxy.mjs` |
| pi 的模型配置 | `C:\Users\FenglinStudy\.pi\agent\models.json` |
| OpenCode 的模型配置（备用） | `C:\Users\FenglinStudy\.config\opencode\opencode.json` |
| LM Studio 模型本体（26GB，3个模型） | `C:\Users\FenglinStudy\.lmstudio\.models\` |
| pi 会话记录（很小，不用管） | `C:\Users\FenglinStudy\.pi\agent\sessions\` |

## 可删的东西

| 东西 | 大小 | 结论 |
|---|---|---|
| `C:\Users\FenglinStudy\.local\share\opencode\opencode.db.bak`（连同 -shm.bak / -wal.bak） | **713 MB** | 修 OpenCode 数据库时的备份，确认不再用 OpenCode 后可删，**这是最大头** |
| `C:\Users\FenglinStudy\AppData\Local\Temp\octest\` | 几 KB | 测试残留（hello.py），可删 |
| `D:\FengProj\free-token-research\proxy.log` | 会慢慢长 | 代理日志，可随时删，不影响运行 |
| LM Studio 里的 `qwen/qwen3.6-35b-a3b`（22GB） | 22 GB | 本地另存的大模型，8G 显存跑不快，**不用的话在 LM Studio 里删掉能省 22GB** |

不要删：`qwen3.5-4b` 模型本体（3.9GB）、`.pi/agent/models.json`、`lmstudio-proxy.mjs`。

## 注意

- 电脑重启后 LM Studio 服务和代理桥都会消失，**双击 bat 就全回来了**，无需其他操作
- 想完全免手动：把 bat 创建快捷方式放进 `shell:startup` 文件夹（Win+R 输入 shell:startup），开机自动拉起
- 这个 4B 模型的能力边界（实测）：翻译/问答/简单编程 = GPT-3.5 水平，很好用；多步逻辑推理和事实细节会一本正经地出错，**重要结论要自己核验**

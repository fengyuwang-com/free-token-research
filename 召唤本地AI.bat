@echo off
title 本地AI编码环境 (LM Studio + 代理桥 + pi)
cd /d %USERPROFILE%

echo.
echo ============================================
echo   本地AI编码环境 一键召唤
echo   模型: Qwen3.5-4B 无审查版, 64K上下文, 全免费
echo ============================================
echo.

echo [1/3] 启动 LM Studio 服务 (端口1234)...
lms server start >nul 2>&1

echo [2/3] 加载模型 (64K上下文, 如已加载会跳过)...
lms ps 2>nul | findstr /C:"LOADED" >nul
if errorlevel 1 (
    echo        正在加载, 约10秒...
    lms load qwen3.5-4b --context-length 65536 --gpu max >nul 2>&1
)

echo [3/3] 启动代理桥 (8765 到 1234, 合并系统消息+关思考)...
netstat -ano 2>nul | findstr /C:":8765" | findstr /C:"LISTENING" >nul
if errorlevel 1 (
    start "proxy-bridge" /min node D:\FengProj\free-token-research\scripts\lmstudio-proxy.mjs
    timeout /t 2 /nobreak >nul
)

curl -s -m 5 http://127.0.0.1:8765/v1/models 2>nul | findstr /C:"qwen3.5-4b" >nul
if errorlevel 1 (
    echo.
    echo [X] 链路未就绪! 检查: LM Studio 是否安装并打开过一次
) else (
    echo.
    echo [OK] 全链路就绪!
    echo.
    echo 现在你可以:
    echo   1. 直接输入 pi 进入编程模式, /model 选 lmstudio/qwen3.5-4b
    echo   2. 或本窗口直接跑: pi -p --model lmstudio/qwen3.5-4b "你的问题"
)

echo.
if "%1"=="pi" (
    pi --model lmstudio/qwen3.5-4b
) else (
    pause
)

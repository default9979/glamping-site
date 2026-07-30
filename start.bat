@echo off
cd /d "%~dp0"
echo Stopping old Node processes...
taskkill /F /IM node.exe >nul 2>&1
echo Starting dev server...
start "" cmd /k "npm run dev"
timeout /t 3 /nobreak >nul
start http://127.0.0.1:5173/
echo Site: http://127.0.0.1:5173/
pause

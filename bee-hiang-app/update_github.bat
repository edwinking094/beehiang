@echo off
echo ==========================================
echo       Bee Hiang - GitHub Auto Sync
echo ==========================================
echo.
echo [1/3] Adding changes...
git add .

echo.
echo [2/3] Committing changes...
git commit -m "Update: %date% %time%"

echo.
echo.
echo [3/3] Pushing to GitHub...
git pull origin main
git push origin main

echo.
echo ==========================================
echo       Sync Complete!
echo ==========================================
echo.
pause

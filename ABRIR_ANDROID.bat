@echo off
call npm run build
call npx cap sync android
call npx cap open android

@echo off
chcp 65001 > nul
cls
echo ============================================
echo       JOGAE - REACT + CAPACITOR ANDROID
echo ============================================
echo.
echo [1/5] Instalando dependencias...
call npm install
if errorlevel 1 goto :erro

echo.
echo [2/5] Gerando a pasta dist...
call npm run build
if errorlevel 1 goto :erro

echo.
if exist android (
  echo [3/5] A pasta android ja existe. Pulando criacao...
) else (
  echo [3/5] Criando projeto Android nativo...
  call npx cap add android
  if errorlevel 1 goto :erro
)

echo.
echo [4/5] Sincronizando WebView e plugins...
call npx cap sync android
if errorlevel 1 goto :erro

echo.
echo [5/5] Pronto!
echo.
echo Agora voce tera:
echo   - src\
echo   - dist\
echo   - android\
echo   - capacitor.config.json
echo.
echo Para abrir no Android Studio, use:
echo   npx cap open android
echo.
pause
exit /b 0

:erro
echo.
echo Ocorreu um erro. Leia PASSO_A_PASSO.md e confirme Node.js, npm e Android Studio.
pause
exit /b 1

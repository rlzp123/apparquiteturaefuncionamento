#!/usr/bin/env bash
set -e
npm install
npm run build
if [ ! -d android ]; then
  npx cap add android
fi
npx cap sync android
echo "Pronto. Para abrir: npx cap open android"

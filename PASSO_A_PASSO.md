# PASSO A PASSO — Atividade Capacitor + React

## 1. Abrir o projeto

No terminal dentro da pasta:

```bash
npm install
npm run dev
```

## 2. Gerar a distribuição web

```bash
npm run build
```

Observe a pasta `dist/`. Ela contém o resultado que a WebView consegue carregar.

## 3. Capacitor já configurado

O projeto já possui:

- `@capacitor/core`
- `@capacitor/cli`
- `@capacitor/android`
- `@capacitor/camera`
- `@capacitor/geolocation`
- `capacitor.config.json`

Configuração principal:

```json
{
  "appId": "com.jogae.app",
  "appName": "JOGAÊ",
  "webDir": "dist"
}
```

## 4. Criar a camada Android

Na primeira vez:

```bash
npx cap add android
```

Isso cria a pasta `android/`.

## 5. Sincronizar

Sempre depois de alterar o React:

```bash
npm run build
npx cap sync android
```

## 6. Abrir no Android Studio

```bash
npx cap open android
```

## 7. Native Bridge usada neste projeto

### Câmera

O componente `src/components/NativeTools.jsx` chama:

```js
Camera.getPhoto(...)
```

No Android, o plugin do Capacitor faz a ponte entre o JavaScript e a câmera nativa.

### GPS

O mesmo componente chama:

```js
Geolocation.getCurrentPosition(...)
```

No Android, o plugin conversa com o serviço nativo de localização.

## 8. Fluxo para explicar ao professor

```text
src/ (React + JSX)
        ↓
npm run build
        ↓
dist/ (HTML + CSS + JS)
        ↓
Capacitor
        ↓
WebView + Native Bridge
        ↓
Android
        ↓
Câmera / GPS
```

## 9. Print de entrega

Depois do `npx cap add android`, deixe o explorador do VS Code aberto mostrando:

```text
JOGAE_CAPACITOR_REACT/
├── android/
├── dist/
├── public/
├── src/
├── capacitor.config.json
├── package.json
└── vite.config.js
```

Esse é o print mais importante da atividade.

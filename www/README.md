# JOGAÊ — React + Vite + Tailwind + Capacitor

Projeto preparado para a atividade **Transformando seu Web App em Mobile (Capacitor + React)**.

## O que já está pronto

- React + Vite
- Tailwind CSS
- Layout mobile-first com visual gamer/cinematográfico
- Slider de destaques
- Catálogo com busca e categorias
- Modal de detalhes
- Carrinho em `localStorage`
- Animações e responsividade
- Plugin `@capacitor/camera`
- Plugin `@capacitor/geolocation`
- `capacitor.config.json` com `webDir: "dist"`
- Scripts para instalar, gerar `dist/`, criar `android/` e sincronizar

## Forma mais fácil no Windows

Dê dois cliques em:

`SETUP_ANDROID.bat`

Ele executa:

1. `npm install`
2. `npm run build`
3. `npx cap add android` (somente se a pasta ainda não existir)
4. `npx cap sync android`

Depois use:

```bash
npx cap open android
```

## Ciclo de desenvolvimento

Sempre que alterar o React:

```bash
npm run build
npx cap sync android
```

Ou use:

```bash
npm run cap:sync
```

## O que mostrar no print da atividade

Após executar o setup, abra a pasta do projeto no VS Code e mostre:

- `src/`
- `dist/`
- `android/`
- `capacitor.config.json`

## Explicação rápida

`src/` é o código React que você escreve. O Vite transforma esse código em HTML/CSS/JS dentro de `dist/`. O Capacitor usa `webDir: "dist"` para copiar o build web para a camada nativa. O app roda dentro de uma WebView e, quando precisa de câmera ou GPS, usa plugins que atravessam a Native Bridge para acessar APIs do Android.

# Roteiro rápido para apresentar

> Nosso projeto foi desenvolvido em React, dentro da pasta `src`. O React utiliza JSX, então antes de levar o projeto para o mobile usamos o Vite para executar o build. O comando `npm run build` gera a pasta `dist`, que contém os arquivos web preparados para produção.
>
> O Capacitor foi configurado para usar essa pasta por meio da propriedade `webDir`. Depois adicionamos a plataforma Android, criando a pasta `android`, que representa a camada nativa do aplicativo.
>
> O conteúdo da interface roda dentro de uma WebView. Quando o JavaScript precisa acessar um recurso do celular, como câmera ou GPS, usamos plugins do Capacitor. Esses plugins fazem a Native Bridge entre o código React e as APIs nativas do Android.
>
> Sempre que alteramos o código em `src`, fazemos novamente `npm run build` e `npx cap sync android` para atualizar o aplicativo nativo.

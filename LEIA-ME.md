# JOGAÊ — React + Supabase Auth + Google + CRUD

Este pacote atualiza os arquivos do projeto enviado. A configuração do Google no painel já foi considerada pronta; o botão **Entrar com Google** está habilitado no código.

## Executar

1. Extraia o ZIP inteiro em uma pasta nova e abra essa pasta no VS Code.
2. No terminal, execute:

```bash
npm install
npm run dev
```

3. Abra **http://localhost:5173**. Use o Vite, não o Live Server nem o duplo clique em index.html.

`.env.local` já contém a URL e a chave pública do Supabase fornecidas anteriormente. Não precisa colocar o Client ID nem o Client Secret no frontend. Se precisar alterar o projeto, edite `.env.local` e reinicie o Vite.

## Arquivos da atividade

| Arquivo | O que faz |
| --- | --- |
| `src/lib/supabaseClient.js` | Inicializa o SDK com as variáveis de ambiente. |
| `src/context/AuthContext.jsx` | Guarda a sessão global; implementa signUp, signInWithPassword, signInWithOAuth, getSession, onAuthStateChange e signOut. |
| `src/components/AuthScreen.jsx` | Login, cadastro, botão Google e recuperação de senha. |
| `src/components/AuthLayout.jsx` e `src/auth.css` | Visual responsivo para celular e computador. |
| `src/components/AccountControls.jsx` | Mostra nome, e-mail, foto, acesso à lista e botão Sair. |
| `src/components/UserAvatar.jsx` | Exibe avatar_url do Google ou as iniciais do usuário. |
| `src/App.jsx` | Exibe login sem sessão e libera catálogo/CRUD somente com sessão. |
| `src/components/MyGamesCRUD.jsx` | Adiciona, consulta, edita e remove jogos do usuário autenticado. |
| `src/lib/gamesService.js` | Envia as consultas do CRUD ao Supabase com user_id. |
| `src/main.jsx` | Coloca toda a aplicação dentro do AuthProvider. |
| `supabase/minha_lista.sql` | Cria a tabela e as políticas que isolam os jogos por usuário. |

## Usar o CRUD

Se a tabela **minha_lista** já existe com as políticas do complemento anterior, use normalmente. Se ainda não existe, execute `supabase/minha_lista.sql` no SQL Editor uma vez. Esse arquivo é apenas para a lista de jogos; ele não refaz a configuração da autenticação.

Após entrar, clique **Minha conta > Minha lista de jogos**. Você pode criar um jogo, editar o status/plataforma e remover confirmando a ação. Ao sair ou quando a sessão é encerrada, a tela interna fecha e a aplicação retorna ao login.

## Como validar a entrega

1. Rode o projeto e clique **Entrar com Google**.
2. Faça o consentimento com sua conta no Google. O retorno abre o catálogo.
3. Abra **Minha conta** para mostrar `full_name`, e-mail e `avatar_url`.
4. Abra a lista, cadastre um jogo, edite e remova para demonstrar o CRUD.
5. Clique **Sair da conta** e confirme o retorno ao login.
6. No painel do Supabase, abra **Authentication > Users** e capture o registro da conta utilizada.

Capture a tela inicial com o botão Google, o perfil conectado e o registro no Supabase. Envie essas evidências com o link do seu repositório no GitHub. As capturas devem vir do login real feito com sua conta.

O retorno do frontend usa a origem e o caminho atuais da página. Seu endereço local e o endereço publicado precisam estar nas Redirect URLs que você já configurou no Supabase. A URL de callback cadastrada no Google continua sendo a do Supabase, terminada em `/auth/v1/callback`.

## Enviar ao GitHub e publicar

O `.gitignore` já ignora `.env.local`, node_modules e dist. As variáveis VITE do frontend usam somente a chave publishable/anon pública; o Client Secret do Google e chaves privadas ficam fora do código.

Envie o código-fonte atualizado ao seu repositório. Se usar este pacote em uma pasta nova, associe-a ao seu repositório antes do push. Não apague os arquivos do seu repositório original para copiar este pacote.

```bash
npm run build
```

Para Vercel, use **Vite**, comando `npm run build` e saída `dist`. O site publicado recebe o novo código depois de um novo deploy. Configure na hospedagem as mesmas variáveis públicas que estão em `.env.local`.

## Base do catálogo

Os anexos originais não continham a pasta src completa. O catálogo do pacote anterior foi preservado em `public/catalogo/assets/`, com uma função de entrada para montar/desmontar o catálogo ao entrar/sair e imagens com caminhos relativos. Todo o código novo de autenticação e CRUD está em src, em arquivos React legíveis.

Extraia este ZIP como projeto separado. Para integrar ao seu código original completo, preserve suas telas originais e envolva-as com o AuthProvider e a proteção de src/App.jsx; não substitua automaticamente seu App.jsx original pelo arquivo deste pacote.

## Testes

```bash
npm test
npm run build
```

Os testes automatizados usam respostas simuladas do SDK para conferir login Google, perfil, cadastro, sessão, logout, fechamento do CRUD ao sair e operações da lista. Um teste PostgreSQL local aplica o SQL e verifica que outro usuário não consegue ler, alterar, excluir ou inserir jogos em nome do primeiro, e que o acesso anônimo é negado.

O build e os testes de código foram executados. O consentimento real no Google, o recebimento de e-mails, o registro em Authentication > Users e a inspeção visual no navegador precisam ser validados com sua conta; não foram executados aqui.

O login Google deste pacote implementa o fluxo Web da atividade. Um APK Capacitor precisa de deep links e do retorno OAuth configurados para o aplicativo nativo.

## Referências oficiais

- https://supabase.com/docs/guides/auth/social-login/auth-google
- https://supabase.com/docs/reference/javascript/auth-signinwithoauth
- https://supabase.com/docs/reference/javascript/auth-onauthstatechange
- https://supabase.com/docs/reference/javascript/auth-signinwithpassword
- https://supabase.com/docs/reference/javascript/auth-signup

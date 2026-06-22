# Site da MPX Digital

Site institucional em Next.js 14 + Tailwind + 3D (React Three Fiber).
Este guia é para **quem não programa**. Siga na ordem.

---

## Parte 1 — Ver o site no seu computador

Você vai precisar instalar uma coisa só: o **Node.js**.

1. Acesse https://nodejs.org e baixe a versão **LTS**. Instale (next, next, concluir).
2. Abra o **Terminal** (no Mac: aperte `Cmd + Espaço`, digite "Terminal", Enter).
3. No Terminal, "entre" na pasta do projeto. Digite `cd ` (com espaço), arraste a pasta `mpx-digital` para a janela do Terminal e aperte **Enter**.
4. Instale o site (só na primeira vez). Copie e cole:

   ```
   npm install
   ```

   Aperte Enter e espere terminar (uns minutos).

5. Ligue o site:

   ```
   npm run dev
   ```

6. Abra o navegador em **http://localhost:3000**. Pronto, o site está rodando. 🎉

> Para desligar, volte ao Terminal e aperte `Ctrl + C`.

---

## Parte 2 — Publicar de graça na internet (Vercel)

A Vercel é a empresa que faz o Next.js. Publicar lá é grátis e leva ~10 minutos.

**Antes:** crie uma conta no GitHub (https://github.com) — é onde o código fica guardado.

1. Instale o **GitHub Desktop** (https://desktop.github.com) — é o jeito visual, sem comandos.
2. No GitHub Desktop: `File > Add Local Repository`, escolha a pasta `mpx-digital`. Ele vai sugerir "create a repository" — aceite. Depois clique em **Publish repository** (pode deixar privado).
3. Acesse https://vercel.com e clique em **Sign up** → entre **com o GitHub**.
4. No painel da Vercel, clique em **Add New… > Project**.
5. Escolha o repositório `mpx-digital` na lista e clique em **Import**.
6. Não precisa configurar nada. Clique em **Deploy** e espere.
7. Em ~2 minutos a Vercel te dá um link tipo `mpx-digital.vercel.app`. Esse é o seu site no ar.

**Domínio próprio (mpxdigital.net):** dentro do projeto na Vercel, vá em `Settings > Domains`, digite seu domínio e siga as instruções (ela mostra o que configurar no registrador do domínio).

**Atualizar o site depois:** toda vez que você mudar algo e der `Push` no GitHub Desktop, a Vercel publica sozinha a nova versão.

---

## Onde mexer no conteúdo

Quase tudo (textos, serviços, equipe, WhatsApp) está em **um arquivo só**:
`lib/content.ts`. Veja o arquivo `PERSONALIZAR.md` para a lista do que trocar.

# O que personalizar depois

Lista do que você provavelmente vai querer trocar. Tudo é simples.

## 1. Arquivos de imagem (pasta `public/`)

Troque os placeholders pelos oficiais, **mantendo o mesmo nome**:

- `logo-mpx.png` — logo oficial (branca, fundo transparente)
- `mateus-fundador.jpg` — sua foto
- `assinatura-mateus-navy.svg` — assinatura para fundo branco
- `assinatura-mateus-branca.svg` — assinatura para fundo navy
- `favicon.ico` — ícone da aba do navegador

## 2. Textos e dados (arquivo `lib/content.ts`)

Abra com qualquer editor de texto. Cada parte tem comentário em português.
Os mais importantes:

- **WhatsApp** → `whatsappNumero` (já está o seu: 5594993046440).
- **E-mail e CNPJ** → bloco `contato`.
- **Redes sociais** → `contato.redes` (troque os `"#"` pelos links reais).
- **Textos do hero, sobre, serviços, equipe** → blocos com os mesmos nomes.
- **Texto do fundador** → bloco `fundador` (fácil de ajustar).

## 3. Fotos da equipe (opcional)

Hoje a seção Equipe mostra só a função e uma inicial. Quando tiver as fotos,
me chame que eu troco as iniciais por avatares reais.

## 4. Cores

Já estão certas (paleta navy da marca) em `tailwind.config.ts` e
`app/globals.css`. Só mexa se a marca mudar.

---

### Dica
Depois de qualquer mudança, é só salvar o arquivo. Se o site estiver rodando
(`npm run dev`), ele atualiza sozinho no navegador.

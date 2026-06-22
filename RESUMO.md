# Resumo — o que foi feito

## O site
Uma landing page institucional da **MPX Digital**, em azul-marinho profundo e
branco, alternando seções escuras e claras para criar ritmo. Toda a jornada
leva o visitante a chamar no **WhatsApp**.

## Seções (de cima para baixo)
1. **Topo fixo** com logo, menu e botão "Fale conosco" (fundo com blur ao rolar).
2. **Hero** com o objeto 3D (o "elemento-assinatura") e a headline
   *"Marketing que faz aparecer. Tecnologia que faz funcionar."*
3. **Sobre** — a essência da MPX + três pilares (Criação, Performance, Tecnologia/IA).
4. **Serviços** — um **díptico**: Marketing & Criação de um lado, Tecnologia &
   Sistemas do outro. É o que mostra que a MPX é agência **e** casa de tecnologia.
5. **Diferenciais** — por que a MPX, com menção elegante à estrutura de produção
   (Sony, DJI, Ronin).
6. **Fundador** — sua foto, o texto e a assinatura.
7. **Equipe** — cards minimalistas só com a função.
8. **CTA final** — *"Vamos colocar sua marca pra trabalhar."* + botão grande.
9. **Rodapé** — contato, redes, Marabá–PA e CNPJ.

## O elemento-assinatura (o 3D)
Um **cristal/monólito facetado** em navy (o "sólido" = marketing) envolvido por
uma **casca em wireframe** (a "engenharia" = tecnologia). Gira devagar, flutua e
reage de leve ao mouse. Foi feito leve para o celular.

## Cuidado anti-"cara de IA"
- Sem gradiente roxo, sem neon, sem emoji na interface, sem marcadores 01/02/03.
- Sem prova social (depoimentos, números) — a credibilidade vem do design.
- Layouts assimétricos (7/5, lista + bloco navy) em vez de cards robóticos.
- Texto direto, sem clichê de agência.
- A ousadia mora só no 3D; o resto é limpo e disciplinado.

## Importante saber
- Os arquivos de imagem em `/public` são **placeholders** provisórios. Troque
  pelos oficiais com o mesmo nome (veja `PERSONALIZAR.md`).
- Eu não consegui rodar o build no meu ambiente (sem acesso à internet de
  pacotes), então **verifiquei o código manualmente** e deixei tudo pronto para
  rodar na sua máquina com `npm install` e `npm run dev` (passo a passo no
  `README.md`).

## Stack
Next.js 14 · TypeScript · Tailwind CSS · React Three Fiber + Drei (3D) ·
Framer Motion · Lucide React. Pronto para a Vercel.

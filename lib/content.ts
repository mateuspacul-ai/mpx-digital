/**
 * ============================================================
 *  CONTEÚDO DO SITE — MPX DIGITAL
 * ============================================================
 *  Este é o ÚNICO arquivo que você precisa abrir para mudar
 *  textos, serviços, equipe e contatos do site.
 *
 *  Cada bloco tem um comentário em português dizendo o que é.
 *  Edite o que está entre aspas " ". Não mexa nos nomes que
 *  estão antes dos dois-pontos (ex.: titulo:, texto:).
 * ============================================================
 */

import {
  Megaphone,
  LineChart,
  Cpu,
  Clapperboard,
  PenTool,
  Film,
  Globe,
  Boxes,
  Bot,
  Users,
  Camera,
  Sparkles,
  Headphones,
} from "lucide-react";

/* ---------------------------------------------------------
 * 1) CONTATO  —  o coração da conversão
 * --------------------------------------------------------- */
export const contato = {
  // Número de WhatsApp NO FORMATO INTERNACIONAL, só dígitos:
  // 55 (Brasil) + DDD + número. Ex.: 5594993046440
  whatsappNumero: "5594993046440",

  // Mensagem que já vem digitada quando o cliente abre o WhatsApp:
  whatsappMensagem: "Olá! Vim pelo site da MPX e quero crescer com vocês.",

  email: "team@mpxdigital.net",
  cidade: "Marabá, Pará",
  cnpj: "67.252.215/0001-70",

  // Redes sociais — troque o "#" pelos links reais quando tiver:
  redes: {
    instagram: "#",
    linkedin: "#",
    youtube: "#",
  },
};

// Monta o link final do WhatsApp (não precisa mexer aqui)
export const whatsappLink = `https://wa.me/${contato.whatsappNumero}?text=${encodeURIComponent(
  contato.whatsappMensagem
)}`;

/* ---------------------------------------------------------
 * 2) NAVEGAÇÃO (topo do site)
 * --------------------------------------------------------- */
export const navLinks = [
  { rotulo: "Serviços", href: "#servicos" },
  { rotulo: "Trabalho", href: "#trabalho" },
  { rotulo: "Sobre", href: "#sobre" },
  { rotulo: "Equipe", href: "#equipe" },
  { rotulo: "Contato", href: "#contato" },
];

/* ---------------------------------------------------------
 * 3) HERO (primeira tela)
 * --------------------------------------------------------- */
export const hero = {
  // O título é dividido em duas linhas de propósito.
  tituloLinha1: "Marketing que faz aparecer.",
  tituloLinha2: "Tecnologia que faz funcionar.",
  subtitulo:
    "A MPX é agência e casa de tecnologia na mesma mesa — da campanha que vende ao sistema que organiza o seu negócio.",
  botaoPrimario: "Quero crescer",
  botaoSecundario: "Conheça os serviços",
  selo: "Marabá · Pará",
};

/* ---------------------------------------------------------
 * 4) SOBRE A EMPRESA
 * --------------------------------------------------------- */
export const sobre = {
  rotulo: "Quem é a MPX",
  titulo: "Duas coisas que vivem separadas. Aqui, na mesma mesa.",
  texto:
    "A MPX nasceu juntando o marketing que constrói presença com a tecnologia que sustenta o crescimento. Uma marca não cresce só aparecendo bonito: precisa de estrutura, sistema e inteligência por trás.",
  pilares: [
    {
      icone: PenTool,
      titulo: "Criação",
      texto: "Identidade, conteúdo e audiovisual que dão cara à sua marca.",
    },
    {
      icone: LineChart,
      titulo: "Performance",
      texto: "Tráfego e dados trabalhando para trazer cliente, não só curtida.",
    },
    {
      icone: Cpu,
      titulo: "Tecnologia & IA",
      texto: "Sites, sistemas e automações feitos sob medida para o seu negócio.",
    },
  ],
};

/* ---------------------------------------------------------
 * 5) SERVIÇOS  —  duas frentes (o grande diferencial)
 * --------------------------------------------------------- */
export const servicos = {
  rotulo: "O que fazemos",
  titulo: "Agência e casa de tecnologia.",
  subtitulo: "Duas frentes que conversam o tempo todo.",

  // FRENTE A — Marketing & Criação
  marketing: {
    nome: "Marketing & Criação",
    numero: "A",
    itens: [
      {
        icone: Megaphone,
        titulo: "Gestão de Tráfego Pago",
        texto: "Meta Ads e Google Ads com foco em retorno, não em vaidade.",
      },
      {
        icone: Sparkles,
        titulo: "Gestão de Redes Sociais",
        texto: "Presença consistente, com linha editorial e ritmo de verdade.",
      },
      {
        icone: Clapperboard,
        titulo: "Produção Audiovisual",
        texto: "Filmagem, drone e gimbal com estrutura profissional.",
      },
      {
        icone: PenTool,
        titulo: "Design e Identidade Visual",
        texto: "Da logo ao sistema visual completo da marca.",
      },
      {
        icone: Film,
        titulo: "Edição de Vídeo",
        texto: "Cortes para redes, institucionais e anúncios que prendem.",
      },
    ],
  },

  // FRENTE B — Tecnologia & Sistemas
  tecnologia: {
    nome: "Tecnologia & Sistemas",
    numero: "B",
    itens: [
      {
        icone: Globe,
        titulo: "Criação de Websites",
        texto: "Sites rápidos, bonitos e pensados para converter.",
      },
      {
        icone: Boxes,
        titulo: "Sistemas sob medida",
        texto: "Plataformas internas construídas do zero para a sua operação.",
      },
      {
        icone: Bot,
        titulo: "Inteligência Artificial & Automação",
        texto: "CRM e chatbot no WhatsApp, com automações que economizam horas.",
      },
    ],
  },
};

/* ---------------------------------------------------------
 * 5.1) NOSSO TRABALHO  —  vídeos reais (loop, mudo)
 *      Os arquivos ficam em /public/work. Para trocar um vídeo,
 *      substitua o .mp4 e o .jpg (miniatura) com o mesmo nome.
 * --------------------------------------------------------- */
export const trabalho = {
  rotulo: "Nosso trabalho",
  titulo: "Câmera, edição e entrega.",
  subtitulo:
    "Alguns trabalhos reais saídos da nossa estrutura de produção própria.",
  itens: [
    {
      video: "/work/nega.mp4",
      poster: "/work/nega.jpg",
      titulo: "Produção audiovisual",
      tag: "Gastronomia · Nega Isa",
    },
    {
      video: "/work/video2.mp4",
      poster: "/work/video2.jpg",
      titulo: "Edição & color",
      tag: "Food · Nega Isa",
    },
    {
      video: "/work/inaug.mp4",
      poster: "/work/inaug.jpg",
      titulo: "Cobertura de evento",
      tag: "Inauguração · Ernane Joias",
    },
  ],
};

/* ---------------------------------------------------------
 * 6) DIFERENCIAIS  —  por que a MPX
 * --------------------------------------------------------- */
export const diferenciais = {
  rotulo: "Por que a MPX",
  titulo: "O que muda quando criação e engenharia sentam juntas.",
  itens: [
    {
      icone: Users,
      titulo: "Equipe multidisciplinar",
      texto:
        "Tráfego, social, audiovisual, design e desenvolvimento sob o mesmo teto.",
    },
    {
      icone: Camera,
      titulo: "Estrutura de produção própria",
      texto:
        "Câmera Sony, drone DJI e estabilizador Ronin para entregar com acabamento de cinema.",
    },
    {
      icone: Cpu,
      titulo: "IA usada de verdade",
      texto:
        "Automação e inteligência aplicadas ao seu dia a dia, não como enfeite.",
    },
    {
      icone: Headphones,
      titulo: "Atendimento próximo",
      texto: "Você fala com quem executa. Sem camadas, sem ruído.",
    },
  ],
};

/* ---------------------------------------------------------
 * 7) FUNDADOR  —  Mateus Paculdino
 *    (texto fácil de ajustar quando você quiser)
 * --------------------------------------------------------- */
export const fundador = {
  rotulo: "Quem está por trás",
  nome: "Mateus Paculdino",
  cargo: "Fundador da MPX Digital",
  // Foto: coloque o arquivo em /public/mateus-fundador.jpg
  foto: "/mateus-fundador.jpg",
  // Assinatura para fundo claro: /public/assinatura-mateus-navy.svg
  assinatura: "/assinatura-mateus-navy.svg",
  paragrafos: [
    "Comecei a MPX com uma convicção: marketing de verdade e tecnologia precisam andar juntos. Não adianta uma marca aparecer bonito se por trás não existe estrutura, sistema e inteligência para sustentar o crescimento.",
    "Hoje a MPX faz as duas coisas — cria a presença da sua marca e constrói a tecnologia que faz seu negócio rodar. É essa mistura de criatividade com engenharia que nos torna diferentes.",
  ],
};

/* ---------------------------------------------------------
 * 8) EQUIPE  —  cards minimalistas (só a função)
 *    Avatares ficam em /public. Troque depois pelas fotos reais.
 * --------------------------------------------------------- */
export const equipe = {
  rotulo: "O time",
  titulo: "Gente de verdade fazendo cada parte.",
  membros: [
    { funcao: "Gestor de Tráfego", inicial: "T" },
    { funcao: "Social Media", inicial: "S" },
    { funcao: "Filmmaker", inicial: "F" },
    { funcao: "Designer", inicial: "D" },
    { funcao: "Editor de Vídeo", inicial: "E" },
    { funcao: "Desenvolvedor", inicial: "</>" },
  ],
};

/* ---------------------------------------------------------
 * 9) CTA FINAL
 * --------------------------------------------------------- */
export const ctaFinal = {
  titulo: "Vamos colocar sua marca pra trabalhar.",
  texto: "Conta o que você precisa. A gente responde rápido.",
  botao: "Chamar no WhatsApp",
};

/* ---------------------------------------------------------
 * 10) MARCA / METADADOS
 * --------------------------------------------------------- */
export const marca = {
  nome: "MPX Digital",
  // Logo branca para fundo navy: /public/logo-mpx.png
  logo: "/logo-mpx.png",
  descricaoSEO:
    "MPX Digital — agência de marketing e casa de tecnologia em Marabá, PA. Tráfego, audiovisual, sites, sistemas sob medida e IA.",
  ano: new Date().getFullYear(),
};

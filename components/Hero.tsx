"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { hero, whatsappLink } from "@/lib/content";

// O 3D só roda no navegador (WebGL). Enquanto carrega, mostra um vazio
// elegante — nada de "spinner" com cara de carregando genérico.
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full" />,
});

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-900"
    >
      {/* Brilho de fundo muito sutil, atrás do 3D */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[680px] w-[680px] -translate-y-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(10,46,107,0.55) 0%, rgba(0,17,43,0) 70%)",
        }}
      />

      {/* Cena 3D — ocupa a metade direita no desktop, fundo no mobile */}
      <div className="absolute inset-0 md:left-1/2">
        <HeroScene />
      </div>

      {/* Conteúdo de texto */}
      <div className="relative z-10 mx-auto w-full max-w-content px-6 md:px-10">
        <div className="max-w-2xl py-32">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-7 inline-block text-sm uppercase tracking-[0.2em] text-mist"
          >
            {hero.selo}
          </motion.span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-balance sm:text-5xl md:text-6xl lg:text-7xl">
            <motion.span
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="block text-white"
            >
              {hero.tituloLinha1}
            </motion.span>
            <motion.span
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="block text-mist"
            >
              {hero.tituloLinha2}
            </motion.span>
          </h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-xl text-lg leading-relaxed text-mist"
          >
            {hero.subtitulo}
          </motion.p>

          <motion.div
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-medium text-navy-900 transition-transform duration-300 ease-soft hover:-translate-y-0.5"
            >
              {hero.botaoPrimario}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-base text-white transition-colors duration-300 hover:border-white/60"
            >
              {hero.botaoSecundario}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Indicador de rolagem — sóbrio, sem clichê */}
      <motion.a
        href="#sobre"
        aria-label="Rolar para baixo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="group absolute bottom-8 left-6 z-10 flex items-center gap-3 text-mist md:left-10"
      >
        <span className="relative h-10 w-px overflow-hidden bg-white/20">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-white/80"
            animate={{ y: [-16, 40] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
        <span className="text-xs uppercase tracking-[0.2em]">Rolar</span>
      </motion.a>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { trabalho } from "@/lib/content";

// Cada card toca o vídeo em loop, mudo, só quando entra na tela
// (economiza dados e mantém o site leve no celular).
function VideoCard({
  video,
  poster,
  titulo,
  tag,
}: {
  video: string;
  poster: string;
  titulo: string;
  tag: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl bg-navy-800">
      <video
        ref={ref}
        src={video}
        poster={poster}
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      {/* Gradiente para dar legibilidade ao texto */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/85 via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <p className="text-xs uppercase tracking-[0.18em] text-mist">{tag}</p>
        <h3 className="mt-1 font-display text-lg font-medium text-white">
          {titulo}
        </h3>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <Section id="trabalho" tone="deep">
      <div className="max-w-2xl">
        <Reveal>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-mist">
            {trabalho.rotulo}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-balance md:text-4xl">
            {trabalho.titulo}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            {trabalho.subtitulo}
          </p>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {trabalho.itens.map((item, i) => (
          <Reveal key={item.video} delay={i * 0.1}>
            <VideoCard {...item} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

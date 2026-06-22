import Reveal from "./ui/Reveal";
import { servicos } from "@/lib/content";
import type { LucideIcon } from "lucide-react";

type Item = {
  icone: LucideIcon;
  titulo: string;
  texto: string;
};

function ServiceRow({ item, dark }: { item: Item; dark: boolean }) {
  const Icone = item.icone;
  return (
    <div
      className={`flex items-start gap-5 border-t py-6 ${
        dark ? "border-white/10" : "border-navy-900/10"
      }`}
    >
      <span className={dark ? "mt-0.5 text-white" : "mt-0.5 text-navy-800"}>
        <Icone size={22} strokeWidth={1.5} />
      </span>
      <div>
        <h4
          className={`font-display text-lg font-medium ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {item.titulo}
        </h4>
        <p
          className={`mt-1 text-sm leading-relaxed ${
            dark ? "text-mist" : "text-navy-800/70"
          }`}
        >
          {item.texto}
        </p>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="servicos" className="bg-white text-navy-900">
      {/* Cabeçalho */}
      <div className="mx-auto w-full max-w-content px-6 pt-24 md:px-10 md:pt-32">
        <Reveal>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-navy-800/60">
            {servicos.rotulo}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tightest text-balance md:text-5xl">
            {servicos.titulo}{" "}
            <span className="text-navy-800/50">{servicos.subtitulo}</span>
          </h2>
        </Reveal>
      </div>

      {/* Díptico: duas frentes lado a lado (empilha no mobile) */}
      <div className="mx-auto mt-16 grid w-full max-w-content grid-cols-1 px-6 pb-24 md:px-10 md:pb-32 lg:grid-cols-2 lg:gap-0">
        {/* Frente A — Marketing & Criação (lado claro) */}
        <Reveal className="lg:pr-14">
          <div className="lg:border-r lg:border-navy-900/10 lg:pr-14">
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-display text-sm font-medium text-navy-800/40">
                {servicos.marketing.numero}
              </span>
              <h3 className="font-display text-xl font-semibold text-navy-900 md:text-2xl">
                {servicos.marketing.nome}
              </h3>
            </div>
            <div className="mt-4">
              {servicos.marketing.itens.map((item) => (
                <ServiceRow key={item.titulo} item={item} dark={false} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Frente B — Tecnologia & Sistemas (bloco navy, contraste forte) */}
        <Reveal delay={0.1} className="mt-10 lg:mt-0 lg:pl-14">
          <div className="h-full rounded-2xl bg-navy-800 p-8 text-white md:p-10">
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-display text-sm font-medium text-white/40">
                {servicos.tecnologia.numero}
              </span>
              <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
                {servicos.tecnologia.nome}
              </h3>
            </div>
            <div className="mt-4">
              {servicos.tecnologia.itens.map((item) => (
                <ServiceRow key={item.titulo} item={item} dark={true} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { sobre } from "@/lib/content";

export default function About() {
  return (
    <Section id="sobre" tone="deep">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
        {/* Coluna do texto */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-mist">
              {sobre.rotulo}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight tracking-tightest text-balance md:text-4xl">
              {sobre.titulo}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist">
              {sobre.texto}
            </p>
          </Reveal>
        </div>

        {/* Coluna dos pilares */}
        <div className="lg:col-span-5">
          <div className="flex flex-col">
            {sobre.pilares.map((pilar, i) => {
              const Icone = pilar.icone;
              return (
                <Reveal key={pilar.titulo} delay={0.1 + i * 0.08}>
                  <div className="flex items-start gap-5 border-t border-white/10 py-6 first:border-t-0 first:pt-0">
                    <span className="mt-0.5 text-white/80">
                      <Icone size={22} strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-medium text-white">
                        {pilar.titulo}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-mist">
                        {pilar.texto}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

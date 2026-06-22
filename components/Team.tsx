import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { equipe } from "@/lib/content";

export default function Team() {
  return (
    <Section id="equipe" tone="deep">
      <div className="max-w-2xl">
        <Reveal>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-mist">
            {equipe.rotulo}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-balance md:text-4xl">
            {equipe.titulo}
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
        {equipe.membros.map((membro, i) => (
          <Reveal key={membro.funcao} delay={i * 0.06}>
            <div className="flex h-full flex-col items-start gap-5 bg-navy-900 p-6 transition-colors duration-300 hover:bg-navy-800">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 font-display text-sm text-white">
                {membro.inicial}
              </span>
              <p className="text-sm leading-snug text-mist">{membro.funcao}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

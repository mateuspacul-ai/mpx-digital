import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { diferenciais } from "@/lib/content";

export default function Differentials() {
  return (
    <Section tone="navy">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-mist">
              {diferenciais.rotulo}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tightest text-balance md:text-4xl">
              {diferenciais.titulo}
            </h2>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-x-10 sm:grid-cols-2">
            {diferenciais.itens.map((item, i) => {
              const Icone = item.icone;
              return (
                <Reveal key={item.titulo} delay={i * 0.07}>
                  <div className="border-t border-white/10 py-7">
                    <Icone size={24} strokeWidth={1.5} className="text-white" />
                    <h3 className="mt-4 font-display text-lg font-medium text-white">
                      {item.titulo}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {item.texto}
                    </p>
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

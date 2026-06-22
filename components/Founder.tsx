import Image from "next/image";
import Section from "./ui/Section";
import Reveal from "./ui/Reveal";
import { fundador } from "@/lib/content";

export default function Founder() {
  return (
    <Section tone="light">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Foto — assimétrica, ocupa menos colunas que o texto */}
        <Reveal className="lg:col-span-5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-navy-800">
            <Image
              src={fundador.foto}
              alt={fundador.nome}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        {/* Texto + assinatura */}
        <div className="lg:col-span-7">
          <Reveal>
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-navy-800/60">
              {fundador.rotulo}
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-semibold tracking-tightest text-navy-900 md:text-4xl">
              {fundador.nome}
            </h2>
            <p className="mt-1 text-base text-navy-800/60">{fundador.cargo}</p>
          </Reveal>

          <div className="mt-7 space-y-5">
            {fundador.paragrafos.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.06}>
                <p className="max-w-xl text-lg leading-relaxed text-navy-800/85">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Assinatura logo abaixo do texto */}
          <Reveal delay={0.25}>
            <div className="relative mt-8 h-16 w-56">
              <Image
                src={fundador.assinatura}
                alt={`Assinatura de ${fundador.nome}`}
                fill
                unoptimized
                className="object-contain object-left"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

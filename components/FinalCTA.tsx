import Reveal from "./ui/Reveal";
import { ArrowUpRight } from "lucide-react";
import { ctaFinal, whatsappLink } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section id="contato" className="bg-navy-800 text-white">
      <div className="mx-auto w-full max-w-content px-6 py-28 text-center md:px-10 md:py-40">
        <Reveal>
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tightest text-balance md:text-6xl">
            {ctaFinal.titulo}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-6 max-w-md text-lg text-mist">
            {ctaFinal.texto}
          </p>
        </Reveal>
        <Reveal delay={0.16}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-white px-9 py-4 text-lg font-medium text-navy-900 transition-transform duration-300 ease-soft hover:-translate-y-0.5"
          >
            {ctaFinal.botao}
            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

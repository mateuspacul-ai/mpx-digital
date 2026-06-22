/**
 * Embrulho padrão de seção: controla largura máxima, respiro vertical
 * e a cor de fundo (navy escuro ou branco). Mantém o espaçamento
 * consistente sem deixar tudo com "cara de template".
 */

import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  tone?: "navy" | "deep" | "light";
  className?: string;
};

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  navy: "bg-navy-800 text-white",
  deep: "bg-navy-900 text-white",
  light: "bg-white text-navy-900",
};

export default function Section({
  id,
  children,
  tone = "deep",
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-content px-6 py-24 md:px-10 md:py-32">
        {children}
      </div>
    </section>
  );
}

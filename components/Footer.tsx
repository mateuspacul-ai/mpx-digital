import Image from "next/image";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { marca, contato, navLinks, whatsappLink } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 text-mist">
      <div className="mx-auto w-full max-w-content px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marca + cidade */}
          <div className="md:col-span-5">
            <Image
              src={marca.logo}
              alt={marca.nome}
              width={140}
              height={36}
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed">
              Agência de marketing e casa de tecnologia. {contato.cidade}.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={contato.redes.instagram}
                aria-label="Instagram"
                className="text-mist transition-colors hover:text-white"
              >
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a
                href={contato.redes.linkedin}
                aria-label="LinkedIn"
                className="text-mist transition-colors hover:text-white"
              >
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a
                href={contato.redes.youtube}
                aria-label="YouTube"
                className="text-mist transition-colors hover:text-white"
              >
                <Youtube size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-white/80">
              Navegação
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-white"
                  >
                    {link.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-medium uppercase tracking-[0.16em] text-white/80">
              Contato
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contato.email}`}
                  className="transition-colors hover:text-white"
                >
                  {contato.email}
                </a>
              </li>
              <li>{contato.cidade}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-mist/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {marca.ano} {marca.nome}. Todos os direitos reservados.
          </p>
          <p>CNPJ {contato.cnpj}</p>
        </div>
      </div>
    </footer>
  );
}

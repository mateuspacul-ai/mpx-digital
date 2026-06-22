"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navLinks, marca, whatsappLink } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-soft ${
        scrolled
          ? "border-b border-white/10 bg-navy-900/70 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 w-full max-w-content items-center justify-between px-6 md:px-10">
        <a href="#topo" className="relative flex items-center" aria-label={marca.nome}>
          <Image
            src={marca.logo}
            alt={marca.nome}
            width={180}
            height={46}
            priority
            className="h-9 w-auto md:h-11"
          />
        </a>

        {/* Links — desktop */}
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-mist transition-colors duration-300 hover:text-white"
            >
              {link.rotulo}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-soft hover:border-white hover:bg-white hover:text-navy-900"
          >
            Fale conosco
          </a>
        </div>

        {/* Botão menu — mobile */}
        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Menu mobile aberto */}
      {open && (
        <div className="border-t border-white/10 bg-navy-900/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-mist transition-colors hover:text-white"
              >
                {link.rotulo}
              </a>
            ))}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-white px-5 py-3 text-center text-base font-medium text-navy-900"
            >
              Fale conosco
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

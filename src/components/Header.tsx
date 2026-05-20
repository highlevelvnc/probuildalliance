"use client";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { IconMenu, IconClose, IconWhatsApp } from "./Icons";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-xl border-b border-ink-border"
          : "bg-gradient-to-b from-ink-deep/70 to-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`container-x flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" aria-label="PA Remodelações — Início">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-accent font-body text-[11.5px] font-semibold uppercase tracking-[0.22em] text-cream/70 hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex items-center gap-2 bg-brand-red text-white px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.22em] transition-all duration-300 hover:bg-brand-red-bright hover:-translate-y-0.5"
        >
          <IconWhatsApp className="h-4 w-4" />
          Pedir orçamento
        </a>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="lg:hidden p-2 -mr-2 text-cream"
        >
          <IconMenu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-ink-deep/80" onClick={() => setOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm bg-ink-panel border-l border-ink-border flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-ink-border">
            <Logo />
            <button onClick={() => setOpen(false)} aria-label="Fechar menu" className="p-2 text-cream">
              <IconClose className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col gap-1 p-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-4 font-display font-bold text-xl tracking-tight text-cream border-b border-ink-border"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            onClick={() => setOpen(false)}
            className="m-6 inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-4 text-[12px] font-semibold uppercase tracking-[0.22em]"
          >
            <IconWhatsApp className="h-4 w-4" />
            Pedir orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

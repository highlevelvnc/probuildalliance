"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { WHATSAPP_URL, STATS } from "@/lib/constants";
import { IconWhatsApp, IconArrow } from "./Icons";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (imgRef.current) {
            imgRef.current.style.transform = `translate3d(0, ${y * 0.15}px, 0) scale(${1 + y * 0.00012})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink-deep"
    >
      {/* Blueprint grid */}
      <div className="absolute inset-0 bg-blueprint bg-blueprint-fade opacity-50 pointer-events-none" />

      {/* Accent vertical beams */}
      <div className="absolute inset-y-0 right-[14%] w-px bg-gradient-to-b from-transparent via-brand-red/40 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-[36%] w-px bg-gradient-to-b from-transparent via-brand-royal/35 to-transparent pointer-events-none" />

      <div className="container-x relative w-full pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
        <div>
          <span
            className="eyebrow eyebrow-line opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            PA Remodelações · Lisboa · Setúbal
          </span>

          <h1
            className="font-display font-black text-display-2xl text-cream mt-6 mb-8 sm:mb-10 leading-[0.92]"
          >
            <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              Construímos
            </span>
            <span className="block text-brand-red opacity-0 animate-fade-up" style={{ animationDelay: "0.40s", animationFillMode: "forwards" }}>
              Confiança.
            </span>
            <span className="block opacity-0 animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}>
              Criamos
            </span>
            <span className="block text-brand-royal opacity-0 animate-fade-up" style={{ animationDelay: "0.70s", animationFillMode: "forwards" }}>
              Espaços.
            </span>
          </h1>

          <p
            className="text-cream/70 text-base sm:text-lg max-w-xl leading-relaxed mb-10 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.95s", animationFillMode: "forwards" }}
          >
            Construção civil, remodelações premium e manutenção em Lisboa, Setúbal e Área Metropolitana.
            Pintura, eletricidade, pladur, pavimento flutuante, decks e marcenaria — executados com rigor e acabamento ao detalhe.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "1.15s", animationFillMode: "forwards" }}
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="btn-primary">
              <IconWhatsApp className="h-4 w-4" />
              <span>Pedir orçamento</span>
            </a>
            <a href="#services" className="btn-ghost">
              Ver serviços
              <IconArrow className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Featured image */}
        <div
          ref={imgRef}
          className="relative hidden lg:block aspect-[4/5] opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div className="absolute -inset-[1px] border border-cream/10" />
          <div className="absolute -bottom-3 -right-3 w-2/3 h-px bg-brand-red" />
          <div className="absolute -top-3 -left-3 h-2/3 w-px bg-brand-royal" />
          <Image
            src="/images/deckpiscinalindo.webp"
            alt="Projeto de deck premium com piscina executado pela PA Remodelações"
            fill
            priority
            sizes="(max-width: 1024px) 0px, 40vw"
            className="object-cover grayscale-[0.15] contrast-[1.05]"
          />
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute inset-x-0 bottom-0 border-t border-cream/10 bg-ink-deep/70 backdrop-blur-sm">
        <div className="container-x grid grid-cols-3 divide-x divide-cream/8">
          {STATS.map((s, i) => (
            <div key={s.label} className="px-3 py-5 sm:py-6 first:pl-0 last:pr-0">
              <div
                className={`font-display font-black text-2xl sm:text-3xl lg:text-4xl ${
                  i === 1 ? "text-brand-royal" : i === 0 ? "text-brand-red" : "text-cream"
                }`}
              >
                {s.value}
              </div>
              <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-mist mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

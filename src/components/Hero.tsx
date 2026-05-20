"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { WHATSAPP_URL, STATS } from "@/lib/constants";
import { IconWhatsApp, IconArrow } from "./Icons";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (imgRef.current) {
            imgRef.current.style.transform = `translate3d(0, ${y * 0.14}px, 0) scale(${1 + y * 0.0001})`;
          }
          if (ghostRef.current) {
            ghostRef.current.style.transform = `translate3d(${-y * 0.08}px, ${y * 0.12}px, 0)`;
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
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-ink-deep grain isolate"
    >
      {/* Ambient orbs */}
      <div className="orb orb-red w-[680px] h-[680px] -top-40 -left-40 animate-pulse-glow" />
      <div className="orb orb-royal w-[600px] h-[600px] top-40 -right-44 animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* Blueprint */}
      <div className="absolute inset-0 bg-blueprint-fine bg-blueprint-fade opacity-70 pointer-events-none" />

      {/* Ghost letters behind heading */}
      <div
        ref={ghostRef}
        className="absolute -bottom-20 -left-12 sm:-bottom-32 sm:-left-20 font-display font-black text-[28rem] sm:text-[40rem] leading-[0.78] text-cream/[0.018] select-none pointer-events-none tracking-[-0.08em] will-change-transform"
        aria-hidden
      >
        PA
      </div>

      <div className="container-x relative w-full pt-32 pb-28 sm:pt-36 sm:pb-32 lg:pt-44 lg:pb-40 grid lg:grid-cols-[1.35fr_1fr] gap-12 lg:gap-20 items-center">
        <div>
          <span
            className="eyebrow eyebrow-line opacity-0 animate-fade-up"
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
          >
            PA Remodelações · Lisboa · Setúbal · 2026
          </span>

          <h1 className="display-line text-cream mt-7 mb-9 sm:mb-11">
            <span className="block text-[clamp(3.5rem,8.2vw,8.5rem)] opacity-0 animate-fade-up" style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}>
              Construímos
            </span>
            <span className="block text-[clamp(3.5rem,8.2vw,8.5rem)] text-brand-red opacity-0 animate-fade-up italic" style={{ animationDelay: "0.4s", animationFillMode: "forwards", fontStyle: "italic" }}>
              Confiança.
            </span>
            <span className="block text-[clamp(3.5rem,8.2vw,8.5rem)] opacity-0 animate-fade-up" style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}>
              Criamos
            </span>
            <span className="block text-[clamp(3.5rem,8.2vw,8.5rem)] text-brand-royal opacity-0 animate-fade-up italic" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
              Espaços.
            </span>
          </h1>

          <p
            className="text-cream/75 text-base sm:text-lg max-w-xl leading-[1.7] mb-10 opacity-0 animate-fade-up"
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
            <a href="#services" className="btn-ghost group">
              <span>Ver serviços</span>
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Featured image with floating badge */}
        <div
          className="relative hidden lg:block opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          <div ref={imgRef} className="relative aspect-[4/5] rounded-xs overflow-hidden shadow-lift will-change-transform">
            <Image
              src="/images/deckpiscinalindo.webp"
              alt="Projeto de deck premium com piscina executado pela PA Remodelações"
              fill
              priority
              sizes="(max-width: 1024px) 0px, 40vw"
              className="object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/40 via-transparent to-ink-deep/10" />
            {/* Frame accents */}
            <div className="absolute -inset-px ring-1 ring-cream/10 rounded-xs pointer-events-none" />
          </div>

          {/* Floating "selo" badge */}
          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-ink-deep/85 backdrop-blur-md border border-cream/10 grid place-items-center text-center animate-float-slow shadow-card">
            <div>
              <div className="font-display font-black text-2xl text-cream leading-none">PA</div>
              <div className="text-[8.5px] uppercase tracking-[0.32em] text-brand-red mt-1.5">Selo de Obra</div>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 card-soft p-5 pr-7 shadow-lift">
            <div className="flex items-center gap-4">
              <div className="font-display font-black text-4xl text-brand-royal leading-none">+250</div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-cream font-semibold">Projetos</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-mist mt-1">entregues</div>
              </div>
            </div>
          </div>

          {/* Color accent lines */}
          <div className="absolute -top-3 right-8 w-px h-16 bg-gradient-to-b from-brand-red to-transparent" />
          <div className="absolute -bottom-3 left-12 w-16 h-px bg-gradient-to-r from-brand-royal to-transparent" />
        </div>
      </div>

      {/* Bottom stats line — floating, more refined */}
      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="container-x">
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 sm:gap-8 lg:gap-12 py-6 sm:py-8 border-t border-cream/8 backdrop-blur-sm">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-baseline gap-3 sm:gap-4">
                <div
                  className={`font-display font-black text-2xl sm:text-3xl lg:text-4xl leading-none ${
                    i === 0 ? "text-brand-red" : i === 1 ? "text-brand-royal" : "text-cream"
                  }`}
                >
                  {s.value}
                </div>
                <div className="hidden sm:block h-6 w-px bg-cream/15" />
                <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.28em] text-cream/55 leading-tight">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

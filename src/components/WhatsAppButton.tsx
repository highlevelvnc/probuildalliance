"use client";
import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./Icons";

export function WhatsAppButton() {
  const [show, setShow] = useState(false);
  const [tip, setTip] = useState(false);

  useEffect(() => {
    const on = () => setShow(window.scrollY > 240);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    if (!show) return;
    const t1 = setTimeout(() => setTip(true), 1200);
    const t2 = setTimeout(() => setTip(false), 5200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [show]);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span
        className={`hidden sm:inline-block bg-ink-deep border border-ink-border text-cream text-[11px] uppercase tracking-[0.22em] px-4 py-2 transition-all duration-400 ${
          tip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
        }`}
      >
        Pedir orçamento
      </span>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener"
        aria-label="Pedir orçamento por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-[#25D366] grid place-items-center text-white shadow-[0_18px_40px_-8px_rgba(37,211,102,0.6)] ring-2 ring-white/90 hover:scale-105 transition-transform"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <IconWhatsApp className="relative h-6 w-6" />
      </a>
    </div>
  );
}

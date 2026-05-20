import Image from "next/image";
import { AREAS, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp } from "./Icons";

export function About() {
  return (
    <section id="about" className="section-y bg-ink-deep relative overflow-hidden">
      <div className="absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-brand-royal/30 to-transparent pointer-events-none" />

      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative aspect-[5/6]" data-reveal="left">
          <div className="absolute -inset-[1px] border border-cream/10" />
          <div className="absolute -top-3 -left-3 h-2/3 w-px bg-brand-red" />
          <div className="absolute -bottom-3 -right-3 w-2/3 h-px bg-brand-royal" />
          <Image
            src="/images/salajanela.webp"
            alt="Sala remodelada pela PA Remodelações com vista para o Tejo"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover grayscale-[0.2] contrast-[1.05]"
          />
          <div className="absolute top-6 -right-3 bg-brand-royal text-cream px-5 py-3 shadow-[0_18px_40px_rgba(29,78,203,0.35)]">
            <div className="font-display font-black text-2xl leading-none">+10</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-cream/85 mt-1">Anos de obra</div>
          </div>
        </div>

        <div data-reveal="right">
          <span className="eyebrow eyebrow-line">A Empresa</span>
          <h2 className="font-display font-black text-display-xl text-cream mt-4 leading-[0.95]">
            Obra séria,<br />
            <span className="text-brand-red">de A a Z.</span>
          </h2>
          <p className="text-cream/70 text-base sm:text-lg leading-relaxed mt-6 max-w-prose">
            A PA Remodelações é uma equipa portuguesa especializada em construção civil,
            remodelação interior e manutenção. Trabalhamos com obras chave-na-mão e com serviços
            específicos — pintura, eletricidade, pladur, pavimento, decks, casas de banho.
            Cada projeto tem garantia por escrito e o mesmo gestor do início ao fim.
          </p>

          <div className="mt-10">
            <div className="text-[10px] uppercase tracking-[0.32em] text-mist mb-4">
              Zonas servidas
            </div>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <span
                  key={a}
                  className="border border-ink-border text-cream/80 text-[12px] uppercase tracking-[0.18em] px-3 py-2"
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener"
            className="btn-primary mt-10"
          >
            <IconWhatsApp className="h-4 w-4" />
            Falar com a equipa
          </a>
        </div>
      </div>
    </section>
  );
}

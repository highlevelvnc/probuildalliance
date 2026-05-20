import Image from "next/image";
import { AREAS, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp, IconArrow } from "./Icons";

export function About() {
  return (
    <section id="about" className="section-y bg-ink relative overflow-hidden">
      <div className="orb orb-red w-[520px] h-[520px] bottom-0 right-[2%] opacity-40" />

      <div className="container-x relative grid lg:grid-cols-[1.05fr_1fr] gap-16 lg:gap-24 items-center">
        {/* Overlapping image composition */}
        <div className="relative" data-reveal="left">
          <div className="relative aspect-[5/6] rounded-xs overflow-hidden shadow-lift">
            <Image
              src="/images/salajanela.webp"
              alt="Sala remodelada pela PA Remodelações com vista para o Tejo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover grayscale-[0.15] contrast-[1.05] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/30 to-transparent" />
          </div>

          {/* Overlapping secondary image */}
          <div className="hidden sm:block absolute -bottom-12 -right-6 lg:-right-10 w-[55%] aspect-[4/5] rounded-xs overflow-hidden shadow-lift border-[6px] border-ink-deep">
            <Image
              src="/images/mesamadeira.webp"
              alt="Detalhe de marcenaria em madeira maciça executada pela PA Remodelações"
              fill
              sizes="(max-width: 1024px) 0px, 25vw"
              className="object-cover grayscale-[0.2] contrast-[1.05]"
            />
          </div>

          {/* Floating badge */}
          <div className="absolute top-6 -left-3 sm:-left-5 bg-brand-royal text-cream px-5 py-4 shadow-glow-royal rounded-xs">
            <div className="font-display font-black text-3xl leading-none">+10</div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-cream/85 mt-1.5">Anos de obra</div>
          </div>

          {/* Accent lines */}
          <div className="absolute -top-4 left-12 w-px h-20 bg-gradient-to-b from-brand-red to-transparent" />
        </div>

        <div data-reveal="right">
          <span className="eyebrow eyebrow-line">A Empresa</span>
          <h2 className="display-line text-cream mt-5 text-display-xl">
            Obra séria,<br />
            <span className="italic text-brand-red">de A a Z.</span>
          </h2>
          <p className="text-cream/75 text-base sm:text-[17px] leading-[1.8] mt-7 max-w-prose">
            A PA Remodelações é uma equipa portuguesa especializada em construção civil,
            remodelação interior e manutenção. Trabalhamos com obras chave-na-mão e com
            serviços específicos — pintura, eletricidade, pladur, pavimento, decks, casas de banho.
          </p>
          <p className="text-cream/65 text-base leading-[1.8] mt-4 max-w-prose">
            Cada projeto tem garantia por escrito e o mesmo gestor do início ao fim.
            Sem subempreitadas sucessivas, sem surpresas no orçamento.
          </p>

          <div className="mt-10">
            <div className="text-[10px] uppercase tracking-[0.32em] text-mist mb-4 flex items-center gap-3">
              <span className="h-px w-6 bg-brand-red" />
              Zonas servidas
            </div>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a, i) => (
                <span
                  key={a}
                  className={`text-[12px] uppercase tracking-[0.18em] px-3.5 py-2 rounded-2xs border transition-colors hover:border-cream/30 ${
                    i < 3
                      ? "border-brand-red/30 text-cream bg-brand-red/[0.06]"
                      : "border-cream/10 text-cream/75 bg-cream/[0.02]"
                  }`}
                >
                  {a}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn-primary"
            >
              <IconWhatsApp className="h-4 w-4" />
              Falar com a equipa
            </a>
            <a href="#portfolio" className="btn-ghost group">
              Ver projetos
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

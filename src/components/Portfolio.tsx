import Image from "next/image";
import { PORTFOLIO } from "@/lib/constants";

export function Portfolio() {
  return (
    <section id="portfolio" className="section-y bg-ink-deep relative">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div data-reveal>
            <span className="eyebrow eyebrow-line">Projetos</span>
            <h2 className="font-display font-black text-display-xl text-cream mt-4 leading-[0.95]">
              Obra que fala<br />
              <span className="text-brand-royal">por si.</span>
            </h2>
          </div>
          <p data-reveal className="text-cream/65 text-base max-w-md leading-relaxed">
            Uma selecção de projetos recentes em Lisboa, Setúbal e Margem Sul —
            do deck premium à remodelação chave-na-mão.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {PORTFOLIO.map((p, i) => (
            <figure
              key={p.src}
              data-reveal
              className={`relative overflow-hidden bg-ink-panel ${
                i === 0 ? "lg:col-span-2 lg:row-span-2 aspect-square lg:aspect-[16/13]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover grayscale-[0.2] contrast-[1.05] hover:grayscale-0 hover:scale-[1.05] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 bg-gradient-to-t from-ink/95 via-ink/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] uppercase tracking-[0.32em] font-semibold text-brand-red">
                  {p.tag}
                </span>
                <span className="font-display font-extrabold text-cream text-lg mt-1">
                  {p.title}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

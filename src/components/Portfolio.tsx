import Image from "next/image";
import { PORTFOLIO } from "@/lib/constants";
import { IconArrow } from "./Icons";

// Bento grid spans for desktop — keeps things asymmetric and editorial
const SPANS = [
  "lg:col-span-6 lg:row-span-2", // hero card big
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-4 lg:row-span-2", // tall
  "lg:col-span-5 lg:row-span-1",
  "lg:col-span-3 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
  "lg:col-span-4 lg:row-span-1",
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-y bg-ink relative overflow-hidden">
      <div className="orb orb-red w-[480px] h-[480px] bottom-20 right-[5%] opacity-40" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-20">
          <div data-reveal className="max-w-2xl">
            <span className="eyebrow eyebrow-line">Projetos Recentes</span>
            <h2 className="display-line text-cream mt-5 text-display-xl">
              Obra que fala<br />
              <span className="italic text-brand-royal">por si.</span>
            </h2>
          </div>
          <p data-reveal className="text-cream/65 max-w-md leading-[1.7] lg:pb-3">
            Uma selecção de projetos em Lisboa, Setúbal e Margem Sul — do deck premium
            à remodelação chave-na-mão de casas de banho e interiores completos.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 lg:auto-rows-[220px] gap-3 lg:gap-4">
          {PORTFOLIO.map((p, i) => (
            <figure
              key={p.src}
              data-reveal
              className={`group relative overflow-hidden rounded-xs bg-ink-panel shadow-card hover:shadow-lift transition-shadow duration-500 ${
                i === 0 ? "col-span-2 aspect-square lg:aspect-auto" : "aspect-[4/5] lg:aspect-auto"
              } ${SPANS[i] ?? ""}`}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover grayscale-[0.2] contrast-[1.05] group-hover:grayscale-0 group-hover:scale-[1.07] transition-all duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-deep/95 via-ink-deep/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span
                  className={`text-[9.5px] uppercase tracking-[0.32em] font-semibold ${
                    i % 2 === 0 ? "text-brand-red" : "text-brand-royal"
                  }`}
                >
                  {p.tag}
                </span>
                <div className="font-display font-extrabold text-cream text-lg sm:text-xl mt-1.5 flex items-center gap-3">
                  <span>{p.title}</span>
                  <IconArrow className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500" />
                </div>
              </figcaption>
              <div className="absolute top-4 right-4 w-8 h-8 grid place-items-center rounded-full bg-ink-deep/70 backdrop-blur-sm border border-cream/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="font-display font-black text-[11px] text-cream">{String(i + 1).padStart(2, "0")}</span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

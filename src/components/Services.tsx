import Image from "next/image";
import { SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section id="services" className="section-y bg-ink relative">
      <div className="container-x">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 lg:mb-20">
          <div data-reveal>
            <span className="eyebrow eyebrow-line">Serviços</span>
            <h2 className="font-display font-black text-display-xl text-cream mt-4 leading-[0.95]">
              Especialidades<br />
              <span className="text-brand-red">de obra completa.</span>
            </h2>
          </div>
          <p data-reveal data-reveal-delay="100" className="text-cream/65 text-base max-w-md leading-relaxed">
            Equipa própria para cada especialidade — coordenamos a obra do início ao fim,
            com a mesma equipa do orçamento à entrega das chaves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink-border">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              data-reveal
              className="group bg-ink-panel hover:bg-ink-raise transition-colors duration-500 flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover grayscale-[0.25] contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.32em] font-semibold text-brand-red">
                  {s.kicker}
                </span>
                <span className="absolute top-5 right-5 font-display font-black text-2xl text-cream/15">
                  0{i + 1}
                </span>
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col">
                <h3 className="font-display font-extrabold text-2xl text-cream tracking-tight">
                  {s.title}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed mt-3 flex-1">
                  {s.desc}
                </p>
                <div className="mt-6 h-px w-10 bg-brand-red group-hover:w-20 transition-all duration-500" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

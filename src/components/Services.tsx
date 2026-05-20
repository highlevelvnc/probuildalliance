import Image from "next/image";
import { SERVICES } from "@/lib/constants";
import { IconArrow } from "./Icons";

export function Services() {
  return (
    <section id="services" className="section-y bg-ink-deep relative overflow-hidden">
      <div className="orb orb-royal w-[520px] h-[520px] top-1/3 -left-32 opacity-50" />

      <div className="container-x relative">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-24">
          <div data-reveal className="max-w-2xl">
            <span className="eyebrow eyebrow-line">Serviços</span>
            <h2 className="display-line text-cream mt-5 text-display-xl">
              Especialidades de<br />
              <span className="italic text-brand-red">obra completa.</span>
            </h2>
          </div>
          <p
            data-reveal
            className="text-cream/65 text-base lg:text-[17px] max-w-md leading-[1.7] lg:pb-3"
          >
            Equipa própria para cada especialidade — coordenamos a obra do início ao fim,
            com o mesmo gestor do orçamento à entrega das chaves.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => {
            const isRed = i % 3 === 0;
            const isRoyal = i % 3 === 2;
            return (
              <article
                key={s.title}
                data-reveal
                className="lift-card group relative rounded-xs overflow-hidden bg-ink-panel border border-cream/[0.07] shadow-card hover:shadow-lift hover:border-cream/15"
              >
                <div className="relative aspect-[4/3.2] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale-[0.2] contrast-[1.04] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-deep via-ink-deep/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-ink-deep/30" />

                  {/* Top kicker */}
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <span
                      className={`text-[10px] uppercase tracking-[0.32em] font-semibold px-2.5 py-1 rounded-2xs backdrop-blur-md ${
                        isRed
                          ? "bg-brand-red/90 text-white"
                          : isRoyal
                          ? "bg-brand-royal/90 text-white"
                          : "bg-cream/10 text-cream border border-cream/15"
                      }`}
                    >
                      {s.kicker}
                    </span>
                    <span className="font-display font-black text-3xl text-cream/15 leading-none">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <h3 className="font-display font-extrabold text-2xl text-cream tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-cream/65 text-sm leading-[1.7] mt-3">{s.desc}</p>
                  <div className="mt-6 flex items-center justify-between">
                    <div
                      className={`h-px w-10 ${
                        isRed ? "bg-brand-red" : isRoyal ? "bg-brand-royal" : "bg-cream/40"
                      } group-hover:w-20 transition-all duration-500`}
                    />
                    <span className="text-[10px] uppercase tracking-[0.28em] text-cream/40 flex items-center gap-2 group-hover:text-cream transition-colors">
                      Saber mais
                      <IconArrow className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

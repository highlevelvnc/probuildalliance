import { PILLARS } from "@/lib/constants";
import { IconShield, IconBolt, IconStar, IconDiamond } from "./Icons";

const ICONS = [IconShield, IconBolt, IconStar, IconDiamond];
const COPY = [
  "Cada projeto com gestor único, contrato escrito e prazos cumpridos.",
  "Equipa própria para cada especialidade — sem subempreitadas sucessivas.",
  "Materiais premium e acabamento ao detalhe em cada divisão.",
  "Garantia escrita mínima de 12 meses, com follow-up pós-obra.",
];

export function PillarsBar() {
  return (
    <section className="relative bg-ink section-y overflow-hidden">
      <div className="orb orb-red w-[480px] h-[480px] -top-40 right-[10%] opacity-50" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20" data-reveal>
          <span className="eyebrow eyebrow-line center">Os Quatro Pilares</span>
          <h2 className="display-line text-cream mt-5 text-display-lg">
            O que sustenta a nossa <span className="italic text-brand-red">obra.</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {PILLARS.map((p, i) => {
            const Icon = ICONS[i];
            const accent =
              i === 0 ? "text-brand-red" : i === 1 ? "text-cream" : i === 2 ? "text-brand-royal" : "text-cream";
            return (
              <div
                key={p.label}
                data-reveal
                className="lift-card group relative card-soft p-7 sm:p-8 hover:border-cream/20 hover:shadow-lift overflow-hidden"
              >
                {/* Ghost number */}
                <div className="absolute -top-4 right-4 font-display font-black text-7xl text-cream/[0.04] leading-none select-none">
                  0{i + 1}
                </div>
                <div
                  className={`w-12 h-12 rounded-full grid place-items-center border border-cream/10 mb-6 transition-all duration-500 group-hover:scale-110 ${
                    i === 0 ? "bg-brand-red/10" : i === 2 ? "bg-brand-royal/10" : "bg-cream/[0.03]"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${accent}`} />
                </div>
                <div className="font-display font-extrabold text-xl text-cream tracking-tight">
                  {p.label}
                </div>
                <p className="text-cream/65 text-sm leading-relaxed mt-3">{COPY[i]}</p>
                <div
                  className={`mt-6 h-px w-8 ${
                    i === 0 ? "bg-brand-red" : i === 2 ? "bg-brand-royal" : "bg-cream/30"
                  } group-hover:w-16 transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

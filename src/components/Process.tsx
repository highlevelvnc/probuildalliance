import { PROCESS_STEPS } from "@/lib/constants";

export function Process() {
  return (
    <section id="process" className="section-y bg-ink relative">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div data-reveal>
            <span className="eyebrow eyebrow-line">Processo</span>
            <h2 className="font-display font-black text-display-xl text-cream mt-4 leading-[0.95]">
              Quatro passos.<br />
              <span className="text-brand-red">Zero surpresas.</span>
            </h2>
            <p className="text-cream/65 text-base leading-relaxed mt-6 max-w-md">
              O mesmo método, projecto após projecto. Tudo escrito antes do martelo bater.
            </p>
          </div>

          <ol className="grid sm:grid-cols-2 gap-px bg-ink-border" data-reveal>
            {PROCESS_STEPS.map((s, i) => (
              <li
                key={s.n}
                className="bg-ink-panel p-7 sm:p-8 flex flex-col gap-3 relative"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-display font-black text-4xl text-brand-red leading-none">
                    {s.n}
                  </span>
                  <span className="h-px flex-1 bg-ink-border" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-mist">
                    {i === PROCESS_STEPS.length - 1 ? "Entrega" : "Etapa"}
                  </span>
                </div>
                <h3 className="font-display font-extrabold text-xl text-cream tracking-tight mt-2">
                  {s.title}
                </h3>
                <p className="text-cream/65 text-sm leading-relaxed">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

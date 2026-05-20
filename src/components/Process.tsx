import { PROCESS_STEPS } from "@/lib/constants";

const ACCENTS = [
  { node: "border-brand-red text-brand-red", line: "bg-brand-red" },
  { node: "border-brand-royal text-brand-royal", line: "bg-brand-royal" },
  { node: "border-brand-red text-brand-red", line: "bg-brand-red" },
  { node: "border-brand-royal text-brand-royal", line: "bg-brand-royal" },
];

export function Process() {
  return (
    <section id="process" className="section-y bg-ink-deep relative overflow-hidden">
      <div className="orb orb-royal w-[460px] h-[460px] top-32 left-[8%] opacity-40" />

      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24" data-reveal>
          <span className="eyebrow eyebrow-line center">Como Trabalhamos</span>
          <h2 className="display-line text-cream mt-5 text-display-xl">
            Quatro passos.<br />
            <span className="italic text-brand-red">Zero surpresas.</span>
          </h2>
          <p className="text-cream/65 leading-[1.7] mt-6">
            O mesmo método, projecto após projecto. Tudo escrito antes do martelo bater.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Central vertical line */}
          <div className="absolute left-[27px] sm:left-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-cream/15 to-transparent sm:-translate-x-1/2 pointer-events-none" />

          <ol className="flex flex-col gap-10 sm:gap-16">
            {PROCESS_STEPS.map((s, i) => {
              const right = i % 2 === 1;
              const accent = ACCENTS[i];
              return (
                <li
                  key={s.n}
                  data-reveal={right ? "right" : "left"}
                  className="relative grid sm:grid-cols-2 sm:gap-14 items-center pl-16 sm:pl-0"
                >
                  {/* Node */}
                  <div
                    className={`absolute left-0 sm:left-1/2 top-3 sm:-translate-x-1/2 w-14 h-14 rounded-full grid place-items-center font-display font-black text-base bg-ink-deep border-2 z-10 shadow-card ${accent.node}`}
                  >
                    {s.n}
                  </div>

                  <div className={right ? "sm:col-start-2" : "sm:col-start-1"}>
                    <div className="card-soft p-7 sm:p-9 relative">
                      <h3 className="font-display font-extrabold text-2xl text-cream tracking-tight">
                        {s.title}
                      </h3>
                      <p className="text-cream/70 leading-[1.7] mt-3">{s.desc}</p>
                      <div className={`mt-5 h-px w-14 ${accent.line}`} />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

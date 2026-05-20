const ITEMS = [
  "Construímos Confiança",
  "Criamos Espaços",
  "Qualidade em cada detalhe",
  "Transformamos espaços. Criamos valor",
  "Equipa própria",
  "Garantia escrita",
  "Visita técnica em 48h",
] as const;

export function Marquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <section className="relative bg-ink-deep border-y border-cream/8 overflow-hidden py-7">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-deep to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-deep to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap" style={{ width: "200%" }}>
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8 px-8 shrink-0">
            <span
              className={`font-display font-extrabold text-2xl sm:text-3xl uppercase tracking-[0.12em] ${
                i % 3 === 0 ? "text-brand-red italic" : i % 3 === 1 ? "text-cream" : "text-brand-royal italic"
              }`}
            >
              {item}
            </span>
            <span className="w-2 h-2 rounded-full bg-cream/20 shrink-0" />
          </div>
        ))}
      </div>
    </section>
  );
}

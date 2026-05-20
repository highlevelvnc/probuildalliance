import Image from "next/image";
import { NAV_LINKS, COMPANY, WHATSAPP_URL } from "@/lib/constants";
import { IconWhatsApp, IconArrow } from "./Icons";

export function Footer() {
  return (
    <footer className="relative bg-ink-deep border-t border-cream/8 overflow-hidden">
      <div className="orb orb-red w-[420px] h-[420px] -bottom-40 -left-20 opacity-30" />
      <div className="orb orb-royal w-[420px] h-[420px] -bottom-40 right-0 opacity-30" />

      {/* Big CTA band */}
      <div className="container-x relative pt-20 lg:pt-24 pb-14 lg:pb-20 border-b border-cream/8">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <div className="text-[11px] uppercase tracking-[0.36em] text-brand-red font-semibold mb-4">
              Pronto para começar?
            </div>
            <h3 className="display-line text-cream text-display-lg">
              Falamos sobre <span className="italic text-brand-royal">a sua obra</span>{" "}
              esta semana.
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end items-stretch sm:items-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener"
              className="btn-primary justify-center"
            >
              <IconWhatsApp className="h-4 w-4" />
              WhatsApp directo
            </a>
            <a href={`tel:${COMPANY.phoneRaw}`} className="btn-ghost justify-center group">
              {COMPANY.phone}
              <IconArrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="container-x relative pt-16 pb-10">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 lg:gap-14 pb-14 border-b border-cream/8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt={COMPANY.name}
                width={56}
                height={56}
                className="rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_28px_rgba(199,18,31,0.18),0_6px_22px_rgba(29,78,203,0.14)]"
              />
              <div className="leading-none">
                <div className="font-display font-extrabold tracking-[0.22em] text-cream">
                  PA <span className="text-brand-red">REMODELAÇÕES</span>
                </div>
                <div className="text-[10px] uppercase tracking-[0.34em] text-mist mt-1.5">
                  Construímos Confiança
                </div>
              </div>
            </div>
            <p className="text-cream/65 text-sm leading-[1.8] max-w-sm">
              {COMPANY.fullName}. Equipa portuguesa especializada em construção civil
              e remodelações premium em Lisboa, Setúbal e Área Metropolitana.
            </p>
            <p className="text-mist-dim text-[11px] uppercase tracking-[0.22em] mt-5 leading-relaxed">
              Horário · Seg–Sex 08h–19h · Sáb 09h–13h
            </p>
          </div>

          <FooterCol title="Navegar" items={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))} />
          <FooterCol
            title="Serviços"
            items={[
              { label: "Pintura & Acabamentos", href: "#services" },
              { label: "Eletricidade", href: "#services" },
              { label: "Pladur & Drywall", href: "#services" },
              { label: "Pavimento Flutuante", href: "#services" },
              { label: "Decks de Madeira", href: "#services" },
              { label: "Casas de Banho", href: "#services" },
            ]}
          />
          <div>
            <h4 className="font-display font-extrabold text-cream tracking-[0.22em] text-xs uppercase mb-6 flex items-center gap-3">
              <span className="h-px w-6 bg-brand-red" /> Contacto
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-cream hover:text-brand-red transition-colors font-semibold">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-cream/75 hover:text-cream transition-colors">
                  WhatsApp directo
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-cream/75 hover:text-cream transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-mist mt-2 text-[12px]">{COMPANY.region}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-mist-dim text-[10.5px] uppercase tracking-[0.26em]">
            © {new Date().getFullYear()} PA Remodelações · Todos os direitos reservados.
          </p>
          <p className="text-mist text-[10.5px] uppercase tracking-[0.26em] flex items-center gap-3">
            <span className="text-brand-red italic">Construímos Confiança</span>
            <span className="w-1 h-1 rounded-full bg-cream/30" />
            <span className="text-brand-royal italic">Criamos Espaços</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-extrabold text-cream tracking-[0.22em] text-xs uppercase mb-6 flex items-center gap-3">
        <span className="h-px w-6 bg-brand-red" /> {title}
      </h4>
      <ul className="flex flex-col gap-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <a href={i.href} className="text-cream/75 hover:text-cream transition-colors">
              {i.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

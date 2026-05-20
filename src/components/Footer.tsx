import { Logo } from "./Logo";
import { NAV_LINKS, COMPANY, WHATSAPP_URL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink-deep border-t border-ink-border pt-20 pb-8">
      <div className="container-x">
        <div className="grid lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-14 pb-14 border-b border-ink-border">
          <div>
            <Logo />
            <p className="text-cream/65 text-sm leading-relaxed max-w-sm mt-6">
              {COMPANY.fullName}. Equipa portuguesa especializada em construção civil
              e remodelações premium em Lisboa, Setúbal e Área Metropolitana.
            </p>
            <p className="text-mist-dim text-xs mt-4 leading-relaxed">
              Horário · Seg–Sex 08h–19h · Sáb 09h–13h
            </p>
          </div>

          <FooterCol title="Navegar" items={NAV_LINKS.map((l) => ({ label: l.label, href: l.href }))} />
          <FooterCol
            title="Serviços"
            items={[
              { label: "Pintura", href: "#services" },
              { label: "Eletricidade", href: "#services" },
              { label: "Pladur", href: "#services" },
              { label: "Pavimento", href: "#services" },
              { label: "Decks", href: "#services" },
              { label: "Casas de banho", href: "#services" },
            ]}
          />
          <div>
            <h4 className="font-display font-extrabold text-cream tracking-wider text-sm uppercase mb-5">
              Contacto
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li>
                <a href={`tel:${COMPANY.phoneRaw}`} className="text-cream/75 hover:text-cream">
                  {COMPANY.phone}
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="text-cream/75 hover:text-cream">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="text-cream/75 hover:text-cream">
                  {COMPANY.email}
                </a>
              </li>
              <li className="text-mist mt-2">{COMPANY.region}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-mist-dim text-[11px] uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} PA Remodelações · Todos os direitos reservados.
          </p>
          <p className="text-mist-dim text-[11px] uppercase tracking-[0.22em]">
            Construímos Confiança · Criamos Espaços
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-display font-extrabold text-cream tracking-wider text-sm uppercase mb-5">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5 text-sm">
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

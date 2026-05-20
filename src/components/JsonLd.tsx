import { AREAS, COMPANY, SERVICES, WHATSAPP_NUMBER } from "@/lib/constants";

export function JsonLd() {
  const business = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${COMPANY.url}/#business`,
    name: COMPANY.name,
    alternateName: ["PA", "PA Remodelações"],
    description:
      "Empresa de construção civil, remodelações e manutenção em Lisboa, Setúbal e Área Metropolitana. Pintura, eletricidade, pladur, pavimento flutuante, decks e marcenaria.",
    url: COMPANY.url,
    logo: `${COMPANY.url}/logo.png`,
    image: `${COMPANY.url}/icons/og-image.png`,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: COMPANY.email,
    priceRange: "€€-€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Dinheiro, Transferência Bancária, MB Way",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT",
      addressRegion: "Lisboa",
      addressLocality: "Lisboa",
    },
    areaServed: AREAS.map((name) => ({ "@type": "City", name })),
    geo: { "@type": "GeoCoordinates", latitude: "38.7223", longitude: "-9.1393" },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "19:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
    ],
    sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`],
    knowsLanguage: ["pt-PT", "pt"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços PA Remodelações",
      itemListElement: SERVICES.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          description: s.desc,
          areaServed: "Lisboa, Setúbal",
        },
      })),
    },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${COMPANY.url}/#website`,
    url: COMPANY.url,
    name: COMPANY.name,
    description: "Construção, remodelações e manutenção em Lisboa e Setúbal.",
    inLanguage: "pt-PT",
    publisher: { "@id": `${COMPANY.url}/#business` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}

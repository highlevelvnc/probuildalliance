export const WHATSAPP_NUMBER = "351934495084";
export const WHATSAPP_MESSAGE =
  "Olá, vi o site da PA Remodelações e gostaria de pedir um orçamento.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const COMPANY = {
  name: "PA Remodelações",
  short: "PA",
  tagline: "Construímos Confiança",
  fullName: "PA Remodelações — Construção, Remodelações e Manutenção",
  region: "Lisboa · Setúbal · Área Metropolitana",
  phone: "+351 934 495 084",
  phoneRaw: "+351934495084",
  email: "geral@paremodelacoes.pt",
  url: "https://www.probuildalliance.pt",
} as const;

export const NAV_LINKS = [
  { href: "#services", label: "Serviços" },
  { href: "#portfolio", label: "Projetos" },
  { href: "#process", label: "Processo" },
  { href: "#about", label: "Empresa" },
  { href: "#contact", label: "Contacto" },
] as const;

export const PILLARS = [
  { label: "Confiança" },
  { label: "Força" },
  { label: "Qualidade" },
  { label: "Acabamento" },
] as const;

export const STATS = [
  { value: "+250", label: "Projetos entregues" },
  { value: "+10", label: "Anos de obra" },
  { value: "100%", label: "Garantia escrita" },
] as const;

export const SERVICES = [
  {
    image: "/images/pintura.jpeg",
    kicker: "Acabamentos",
    title: "Pintura & Acabamentos",
    desc: "Pintura interior e exterior premium com preparação cuidada de superfícies.",
  },
  {
    image: "/images/eletricista.jpeg",
    kicker: "Infraestrutura",
    title: "Eletricidade",
    desc: "Instalações, revisão de quadros e iluminação técnica com rigor e segurança.",
  },
  {
    image: "/images/pladuredrywall.jpeg",
    kicker: "Interior",
    title: "Pladur & Drywall",
    desc: "Divisórias, tectos falsos e reconfiguração de espaços com acabamento limpo.",
  },
  {
    image: "/images/pavimentoflutuante.jpeg",
    kicker: "Revestimento",
    title: "Pavimento Flutuante",
    desc: "Aplicação de pavimento flutuante e parquet com alinhamento preciso.",
  },
  {
    image: "/images/instalacaodecks.jpeg",
    kicker: "Exterior",
    title: "Decks de Madeira",
    desc: "Decks para piscinas e áreas de lazer com visual premium e longa durabilidade.",
  },
  {
    image: "/images/casadebanholinda.webp",
    kicker: "Chave-na-mão",
    title: "Casas de Banho",
    desc: "Remodelação completa — louças, cerâmicas, canalização e iluminação.",
  },
] as const;

export const PORTFOLIO = [
  { src: "/images/deckpiscinalindo.webp", alt: "Deck premium com piscina e murais decorativos", title: "Deck & Piscina", tag: "Lazer · Lisboa" },
  { src: "/images/casadebanholinda.webp", alt: "Remodelação completa de casa de banho com cerâmica e iluminação técnica", title: "Suite & Banho", tag: "Chave-na-mão" },
  { src: "/images/salajanela.webp", alt: "Sala remodelada com janelão e vista para o Tejo", title: "Sala com vista", tag: "Interior" },
  { src: "/images/mesamadeira.webp", alt: "Mesa em madeira maciça executada à medida", title: "Mesa maciça", tag: "Marcenaria" },
  { src: "/images/instalacaodecks.jpeg", alt: "Instalação de deck em madeira para piscina", title: "Instalação Deck", tag: "Exterior" },
  { src: "/images/pladuredrywall.jpeg", alt: "Aplicação de pladur e drywall em obra", title: "Pladur técnico", tag: "Interior" },
  { src: "/images/jacuzzi.webp", alt: "Jacuzzi instalado em deck de madeira com iluminação", title: "Spa exterior", tag: "Lazer" },
  { src: "/images/varanda.webp", alt: "Remodelação completa de varanda em apartamento", title: "Varanda", tag: "Exterior" },
  { src: "/images/portaomadeira.webp", alt: "Portão em madeira maciça por medida", title: "Portão maciço", tag: "Marcenaria" },
] as const;

export const PROCESS_STEPS = [
  { n: "01", title: "Visita técnica", desc: "Avaliamos o espaço, medições e levantamento das necessidades." },
  { n: "02", title: "Orçamento claro", desc: "Proposta detalhada por escrito — prazos, materiais e valores fechados." },
  { n: "03", title: "Execução da obra", desc: "Equipa própria, organização rigorosa e acompanhamento próximo." },
  { n: "04", title: "Entrega final", desc: "Verificação ao detalhe, limpeza e garantia escrita da obra." },
] as const;

export const AREAS = [
  "Lisboa", "Setúbal", "Almada", "Cascais", "Sintra", "Oeiras",
  "Sesimbra", "Palmela", "Seixal", "Barreiro", "Montijo",
  "Loures", "Odivelas", "Amadora",
] as const;

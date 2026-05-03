// Single source of truth — Pulsar Studio public site.
// Edit this file to update brand, team, services, social links across the site.
// Inercia (entidad facturadora) NUNCA aparece aquí ni en ningún material público.

export const brand = {
  name: "Pulsar Studio",
  shortName: "Pulsar",
  domain: "bypulsar.studio",
  url: "https://bypulsar.studio",
  city: "Madrid",
  tagline: "Design and code for brands in motion.",
  description:
    "One signal, two operators. Design and code for the clubs, gyms and communities that move.",
} as const;

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Alexandro Trujillo",
    role: "Engineering",
    bio: "8 years building in Flutter and mobile. Architecture, apps and SaaS platforms.",
    initials: "AT",
  },
  {
    name: "Ela Reyna",
    role: "Creative direction",
    bio: "Branding, visual identity and content. Tunes the signal.",
    initials: "ER",
  },
];

export type Service = {
  num: string;
  title: string;
  lead: string;
  categories: string[];
  external?: string;
};

export const services: Service[] = [
  {
    num: "001",
    title: "Branding & creative direction",
    lead: "A full visual identity tuned to your community. Logo, system, manual.",
    categories: ["Logo", "Identity", "Palette", "Typography", "Manual", "Applications"],
  },
  {
    num: "002",
    title: "Web design & development",
    lead: "Sites that move fast and feel right. SEO-ready, built for the real conversions.",
    categories: ["Design", "Development", "Core Web Vitals", "SEO", "CMS"],
  },
  {
    num: "003",
    title: "Mobile apps & MVPs",
    lead: "Flutter + Supabase. Product in your hand in weeks. iOS and Android from day one.",
    categories: ["iOS", "Android", "Flutter", "Supabase", "MVPs"],
  },
  {
    num: "004",
    title: "AI assets",
    lead: "Your visual material amplified — photo boost, event identity, video promo.",
    categories: ["Photo boost", "Event identity", "Video promo", "Slideshows"],
  },
  {
    num: "005",
    title: "Shopify setup",
    lead: "A store ready to ship in days. Setup, payments, custom theme.",
    categories: ["Setup", "Products", "Payments", "Theme", "Migration"],
  },
  {
    num: "006",
    title: "Cadence",
    lead: "Our SaaS for active communities. A professional site you run by chat.",
    categories: ["SaaS", "Multi-tenant", "Events", "Gallery", "Store", "AI chat"],
    external: "https://cadence.club",
  },
];

export type ApproachStep = {
  step: string;
  title: string;
  desc: string;
};

export const approach: ApproachStep[] = [
  { step: "01", title: "Discovery", desc: "30-min call. No pitch, just listening." },
  { step: "02", title: "Proposal", desc: "One page, in 48 hours." },
  { step: "03", title: "Build", desc: "14 days. We ship, you review." },
  { step: "04", title: "Go live", desc: "Autonomous from day one. Monthly check-ins." },
];

export const social = {
  // TODO: confirmar email real
  email: "hello@bypulsar.studio",
  // TODO: handle real
  instagram: "https://instagram.com/bypulsar.studio",
  instagramHandle: "@bypulsar.studio",
  // TODO: migrar a un slug `pulsar` o `bypulsar` cuando esté disponible.
  // Aceptado temporalmente porque la URL es funcional; el slug "inercia" es visible al hacer click.
  calendly: "https://calendly.com/inercia/30min",
} as const;

export const cadence = {
  url: "https://cadence.club",
} as const;

export const nav = [
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Contact", href: "#contact" },
] as const;

// Imágenes Unsplash curadas — placeholders v1.
// TODO: reemplazar por fotos propias / proyectos reales cuando estén disponibles.
// Curado: foto wellness oscura + grano cinematográfico para encajar con hero monocromo.
export const heroImage = {
  src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2400&q=80",
  alt: "Wellness movement",
  credit: "Unsplash",
} as const;

// Hero: lista de servicios destacados (subset condensado para no saturar)
export const heroServiceList = [
  "Branding & creative direction",
  "Web design & development",
  "Mobile apps · Flutter",
  "Cadence — our SaaS",
] as const;

// Hero CTA — simple rounded pill with a single label. Clicks → Calendly.
export const heroCta = {
  label: "Book a call",
} as const;

// IDs externos — placeholders. Mover a estable en ARCHITECTURE.md cuando sean reales.
export const tracking = {
  // TODO: GA4 measurement ID (G-XXXXXXXX)
  ga4Id: "",
  // TODO: Microsoft Clarity project ID
  clarityId: "",
} as const;

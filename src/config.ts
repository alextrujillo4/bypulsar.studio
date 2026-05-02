// Single source of truth — Pulsar Studio public site.
// Edit this file to update brand, team, services, social links across the site.
// Inercia (entidad facturadora) NUNCA aparece aquí ni en ningún material público.

export const brand = {
  name: "Pulsar Studio",
  shortName: "Pulsar",
  domain: "bypulsar.studio",
  url: "https://bypulsar.studio",
  city: "Madrid",
  tagline: "Diseño y código para marcas que mueven cuerpos.",
  description:
    "Estudio digital boutique especializado en marcas wellness — running, yoga, gym, padel, outdoor.",
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
    bio: "8 años en Flutter y mobile. Arquitectura, apps y plataformas SaaS.",
    initials: "AT",
  },
  {
    name: "Ela Reyna",
    role: "Creative direction",
    bio: "Branding, identidad visual y contenido. La que le mete alma.",
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
    title: "Branding y dirección creativa",
    lead: "Identidad visual completa que conecta con tu comunidad. Logo, sistema y manual.",
    categories: ["Logo", "Identidad", "Paleta", "Tipografía", "Manual", "Aplicaciones"],
  },
  {
    num: "002",
    title: "Web profesional",
    lead: "Sitios rápidos, SEO-ready y con alma. Pensados para conversión real.",
    categories: ["Diseño", "Desarrollo", "Core Web Vitals", "SEO", "CMS"],
  },
  {
    num: "003",
    title: "Apps móviles y MVPs",
    lead: "Flutter + Supabase. Producto real en semanas. iOS y Android desde el primer release.",
    categories: ["iOS", "Android", "Flutter", "Supabase", "MVPs"],
  },
  {
    num: "004",
    title: "AI assets",
    lead: "Tu material visual amplificado: photo boost, event identity y video promo.",
    categories: ["Photo boost", "Event identity", "Video promo", "Slideshows"],
  },
  {
    num: "005",
    title: "Shopify setup",
    lead: "Tienda lista para vender en días. Setup, configuración y tema personalizado.",
    categories: ["Setup", "Productos", "Pagos", "Tema", "Migración"],
  },
  {
    num: "006",
    title: "Cadence",
    lead: "SaaS propio para comunidades wellness. Tu web profesional, gestionada por chat.",
    categories: ["SaaS", "Multi-tenant", "Eventos", "Galería", "Tienda", "AI chat"],
    external: "https://cadence.club",
  },
];

export type ApproachStep = {
  step: string;
  title: string;
  desc: string;
};

export const approach: ApproachStep[] = [
  { step: "01", title: "Discovery", desc: "Llamada de 30 min. Sin venta, solo entender." },
  { step: "02", title: "Propuesta", desc: "Una página, en 48 horas." },
  { step: "03", title: "Build", desc: "14 días. Tú revisas, nosotros ejecutamos." },
  { step: "04", title: "Go live", desc: "Autónomo desde el día 1. Check-in mensual." },
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
  "Web profesional",
  "Apps móviles · Flutter",
  "Cadence — SaaS wellness",
] as const;

// Hero CTA card (estilo Fabrica "Lauren Thompson"). Adaptado a un equipo de 2 sin fotos reales.
export const heroCtaCard = {
  badge: "Hablemos",
  who: "Pulsar Studio",
  cta: "Discovery call",
} as const;

// IDs externos — placeholders. Mover a estable en ARCHITECTURE.md cuando sean reales.
export const tracking = {
  // TODO: GA4 measurement ID (G-XXXXXXXX)
  ga4Id: "",
  // TODO: Microsoft Clarity project ID
  clarityId: "",
} as const;

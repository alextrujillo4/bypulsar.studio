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

// Services — outcome-led titles in plain client language; technical
// terms live in the lead and categories (pills). Each service is a
// Cadence add-on; Cadence is the platform that ties them together.
// See WORDING.md "voice" section.
export const services: Service[] = [
  {
    num: "001",
    title: "Stand out in a crowded floor.",
    lead: "Most fitness brands look identical from across the room. We design an identity your members recognize at a glance — logo, palette, typography, full system.",
    categories: ["Branding", "Logo", "Identity", "Palette", "Typography", "Manual"],
  },
  {
    num: "002",
    title: "A site that runs while you train.",
    lead: "Fast, SEO-ready, built to convert. Plugs into Cadence so updates happen by chat — no CMS, no admin panels.",
    categories: ["Web design", "Development", "Core Web Vitals", "SEO", "CMS"],
  },
  {
    num: "003",
    title: "Your community in their pocket.",
    lead: "A native app for iOS and Android in weeks. Bookings, programs, content — built on Flutter + Supabase.",
    categories: ["iOS", "Android", "Flutter", "Supabase", "MVPs"],
  },
  {
    num: "004",
    title: "Visuals that match your energy.",
    lead: "Phone snaps turned into pro material, event flyers people screenshot, promo videos that move. All on-brand, all fast.",
    categories: ["Photo boost", "Event identity", "Video promo", "Slideshows"],
  },
  {
    num: "005",
    title: "Sell to your community.",
    lead: "Merch, packs, event tickets — without a tech headache. Shopify setup with custom theme, payments and inventory ready to ship.",
    categories: ["Shopify", "Theme", "Payments", "Inventory", "Migration"],
  },
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
  { label: "Services", href: "#services" },
  { label: "Cadence", href: "#cadence" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
] as const;

// Hero is now a clean dark surface with a moving blue cloud (Halo-style).
// No photo for now — the cloud carries the visual weight.

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

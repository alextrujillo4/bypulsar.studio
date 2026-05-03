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
  /** External URL (opens new tab). e.g. https://cadence.club */
  external?: string;
  /** In-page anchor (smooth-scroll via Lenis). e.g. #cadence */
  internal?: string;
  /** Optional CTA label shown as a pill at the end of the expanded body. */
  cta?: string;
};

// Services — short, plain titles (what it IS) + leads explaining the
// value (why you'd want it). Technical terms live in the categories
// pills. Cadence opens the list because it's the flagship product
// every other service plugs into; tapping its CTA scrolls down to
// the dedicated Cadence section below. See WORDING.md.
export const services: Service[] = [
  {
    num: "001",
    title: "Cadence",
    lead:
      "Our SaaS for active communities. A professional site your team runs by chat — no CMS, no admin panels, no admin training. Multi-tenant, with events, gallery, store and Cadence AI built in. The flagship product everything else plugs into.",
    categories: ["SaaS", "Multi-tenant", "Events", "Gallery", "Store", "AI chat"],
    internal: "#cadence",
    cta: "See Cadence",
  },
  {
    num: "002",
    title: "Brand identity",
    lead:
      "A complete visual identity your members can spot from across the floor — logo, palette, typography, brand manual, applications across digital and print. We start with discovery (what makes your space yours), build the system, and ship a manual you can hand to anyone. Designed to scale: works on a flyer, a Story, a t-shirt or a competition wall.",
    categories: ["Logo", "Palette", "Typography", "Manual", "Applications"],
  },
  {
    num: "003",
    title: "Website",
    lead:
      "Custom website design + development for your studio, club or community. Built for speed, SEO and real conversions — booking, story, programs, contact, all in one place. Astro or Next on the front, Sanity or your CMS of choice for content, deployed on Vercel or Firebase. Optimized for Core Web Vitals from launch, accessible by default, owned by you, no template lock-in.",
    categories: ["Design", "Development", "Core Web Vitals", "SEO", "CMS"],
  },
  {
    num: "004",
    title: "Mobile app",
    lead:
      "A real iOS and Android app in your community's hand in weeks, not months. Built on Flutter (one codebase, both stores) + Supabase (auth, database, storage, realtime). Bookings, training programs, member content, push notifications — focused MVP scope, shipped to TestFlight and Play Console in 14–28 days.",
    categories: ["iOS", "Android", "Flutter", "Supabase", "MVPs"],
  },
  {
    num: "005",
    title: "Photo & video",
    lead:
      "Phone snaps amplified into pro-grade material that doesn't look stock. AI-enhanced photos for class menus and IG carousels, event identity kits people actually screenshot (poster + Stories templates + flyer + email banner), and promo videos that move — slideshow, kinetic-text or generative — sized for every channel. All on-brand, fast turnaround.",
    categories: ["Photo boost", "Event identity", "Video promo", "Slideshows"],
  },
  {
    num: "006",
    title: "Online store",
    lead:
      "A Shopify store ready to sell your merch, class packs and event tickets — without a weekend lost to tech setup. We configure payments, set up your first 10 products, install a theme that matches your brand identity (or custom-build one), connect inventory and shipping, and hand it over with a 30-min walkthrough. From zero to first sale in days.",
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

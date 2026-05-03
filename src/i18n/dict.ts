// All public copy in three languages. Keys are flat dot-notation
// strings; markup uses [data-i18n="key"] for plain text and
// [data-i18n-html="key"] for translations that contain inline HTML
// (e.g. the Intro paragraph with <span class="intro-emph"> highlights).
//
// Keep keys stable — the runtime in Layout.astro looks them up by
// exact string match.

export type Locale = "en" | "es" | "fr";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: Array<{ code: Locale; label: string; abbr: string }> = [
  { code: "en", label: "English", abbr: "EN" },
  { code: "es", label: "Español", abbr: "ES" },
  { code: "fr", label: "Français", abbr: "FR" },
];

type Dict = Record<string, string>;

export const en: Dict = {
  // Nav
  "nav.services": "Services",
  "nav.cadence": "Cadence",
  "nav.team": "Team",
  "nav.contact": "Contact",
  "nav.home": "Home",

  // Hero
  "hero.services.0": "Branding & creative direction",
  "hero.services.1": "Web design & development",
  "hero.services.2": "Mobile apps · Flutter",
  "hero.services.3": "Cadence — our SaaS",
  "hero.tagline": "Design and code for brands in motion.",
  "hero.description": "One signal, two operators. Design and code for the clubs, gyms and communities that move.",
  "hero.cta": "Book a call",

  // Intro
  "intro.bright": "We're Pulsar.",
  "intro.tagline": "Design and code for brands in motion.",
  "intro.sub.html": "One signal, two operators. Design and code for the <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">gyms</span> and <span class=\"intro-emph\">communities</span> that move.",
  "intro.cta": "Book a call",

  // Services section
  "services.eyebrow": "What we ship",
  "services.title": "services.",
  "services.subtitle": "Mix what fits — each service stands on its own.",
  "services.categories.label": "Categories",
  "services.cta": "Get started",
  "services.external.cadence": "Visit cadence.club",

  // Service items
  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Our SaaS for active communities. A professional site your team runs by chat — no CMS, no admin panels, no admin training. Multi-tenant, with events, gallery, store and Cadence AI built in. The flagship product everything else plugs into.",
  "services.cadence.cta": "See Cadence",

  "services.brand.title": "Brand identity",
  "services.brand.lead": "A complete visual identity your members can spot from across the floor — logo, palette, typography, brand manual, applications across digital and print. We start with discovery (what makes your space yours), build the system, and ship a manual you can hand to anyone. Designed to scale: works on a flyer, a Story, a t-shirt or a competition wall.",

  "services.web.title": "Website",
  "services.web.lead": "Custom website design + development for your studio, club or community. Built for speed, SEO and real conversions — booking, story, programs, contact, all in one place. Astro or Next on the front, Sanity or your CMS of choice for content, deployed on Vercel or Firebase. Optimized for Core Web Vitals from launch, accessible by default, owned by you, no template lock-in.",

  "services.app.title": "Mobile app",
  "services.app.lead": "A real iOS and Android app in your community's hand in weeks, not months. Built on Flutter (one codebase, both stores) + Supabase (auth, database, storage, realtime). Bookings, training programs, member content, push notifications — focused MVP scope, shipped to TestFlight and Play Console in 14–28 days.",

  "services.media.title": "Photo & video",
  "services.media.lead": "Phone snaps amplified into pro-grade material that doesn't look stock. AI-enhanced photos for class menus and IG carousels, event identity kits people actually screenshot (poster + Stories templates + flyer + email banner), and promo videos that move — slideshow, kinetic-text or generative — sized for every channel. All on-brand, fast turnaround.",

  "services.shop.title": "Online store",
  "services.shop.lead": "A Shopify store ready to sell your merch, class packs and event tickets — without a weekend lost to tech setup. We configure payments, set up your first 10 products, install a theme that matches your brand identity (or custom-build one), connect inventory and shipping, and hand it over with a 30-min walkthrough. From zero to first sale in days.",

  // Cadence section
  "cadence.eyebrow": "our SaaS",
  "cadence.lead": "Our SaaS for active communities. A professional site you run by chat — no CMS, no panels.",
  "cadence.cta": "Visit cadence.club",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Events",
  "cadence.feature.2": "Gallery",
  "cadence.feature.3": "Store",
  "cadence.feature.4": "Cadence AI",

  // Studio (team) section
  "studio.eyebrow": "the team",
  "studio.title.bright": "two of us.",
  "studio.title.fade": "one signal — engineering and creative direction tuned to the same frequency.",
  "studio.mission.title": "Let's tune in",
  "studio.mission.body": "If your brand has signal, we'll amplify it. Small team, full bandwidth — no handoffs, no middle layer.",
  "studio.mission.cta": "Book a call",
  "studio.team.alex.role": "Engineering",
  "studio.team.alex.bio": "8 years building in Flutter and mobile. Architecture, apps and SaaS platforms.",
  "studio.team.ela.role": "Creative direction",
  "studio.team.ela.bio": "Branding, visual identity and content. Tunes the signal.",
  "studio.team.atPulsar": "at pulsar",

  // Footer
  "footer.cta": "Discovery call",
  "footer.nav.label": "Navigation",
  "footer.social.label": "Social",
  "footer.home": "Home",
  "footer.location": "Madrid · Spain",

  // Consent banner
  "consent.text": "We use cookies to understand how the site works and make it better. Accept or reject — it won't affect navigation.",
  "consent.accept": "Accept",
  "consent.reject": "Reject",

  // Language switcher
  "lang.label": "Language",
};

export const es: Dict = {
  "nav.services": "Servicios",
  "nav.cadence": "Cadence",
  "nav.team": "Equipo",
  "nav.contact": "Contacto",
  "nav.home": "Inicio",

  "hero.services.0": "Branding y dirección creativa",
  "hero.services.1": "Diseño y desarrollo web",
  "hero.services.2": "Apps móviles · Flutter",
  "hero.services.3": "Cadence — nuestro SaaS",
  "hero.tagline": "Diseño y código para marcas en movimiento.",
  "hero.description": "Una señal, dos operadores. Diseño y código para los clubs, gimnasios y comunidades que se mueven.",
  "hero.cta": "Reservar llamada",

  "intro.bright": "Somos Pulsar.",
  "intro.tagline": "Diseño y código para marcas en movimiento.",
  "intro.sub.html": "Una señal, dos operadores. Diseño y código para los <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">gimnasios</span> y <span class=\"intro-emph\">comunidades</span> que se mueven.",
  "intro.cta": "Reservar llamada",

  "services.eyebrow": "Lo que entregamos",
  "services.title": "servicios.",
  "services.subtitle": "Combina lo que necesites — cada servicio funciona por sí solo.",
  "services.categories.label": "Categorías",
  "services.cta": "Empezar",
  "services.external.cadence": "Visita cadence.club",

  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Nuestro SaaS para comunidades activas. Una web profesional que tu equipo gestiona por chat — sin CMS, sin paneles de admin, sin formación. Multi-tenant, con eventos, galería, tienda y Cadence AI integrado. El producto principal al que se conecta todo lo demás.",
  "services.cadence.cta": "Ver Cadence",

  "services.brand.title": "Identidad de marca",
  "services.brand.lead": "Una identidad visual completa que tus miembros reconocen al instante — logo, paleta, tipografía, manual de marca, aplicaciones digitales e impresas. Empezamos con discovery (qué hace único tu espacio), construimos el sistema y entregamos un manual que puedes dar a cualquiera. Diseñado para escalar: funciona en un flyer, una Story, una camiseta o una pared de competición.",

  "services.web.title": "Sitio web",
  "services.web.lead": "Diseño y desarrollo web a medida para tu estudio, club o comunidad. Construido para velocidad, SEO y conversión real — booking, tu historia, programas, contacto, todo en un solo lugar. Astro o Next en el front, Sanity o tu CMS preferido para contenido, deploy en Vercel o Firebase. Optimizado para Core Web Vitals desde el día uno, accesible por defecto, propio sin lock-in de plantilla.",

  "services.app.title": "App móvil",
  "services.app.lead": "Una app real para iOS y Android en manos de tu comunidad en semanas, no meses. Construida en Flutter (un código, ambas tiendas) + Supabase (auth, base de datos, storage, realtime). Reservas, programas de entrenamiento, contenido para miembros, push notifications — alcance MVP enfocado, publicado en TestFlight y Play Console en 14–28 días.",

  "services.media.title": "Foto y video",
  "services.media.lead": "Fotos del móvil amplificadas a material profesional que no parece de stock. Fotos mejoradas con IA para menús de clases y carruseles de IG, kits de identidad de evento que la gente sí captura (póster + plantillas de Stories + flyer + banner de email), y videos promocionales que se mueven — slideshow, kinetic-text o generativos — adaptados a cada canal. Todo on-brand, entrega rápida.",

  "services.shop.title": "Tienda online",
  "services.shop.lead": "Una tienda Shopify lista para vender tu merchandising, packs de clases y entradas a eventos — sin perder un fin de semana en setup técnico. Configuramos los pagos, montamos tus primeros 10 productos, instalamos un theme alineado con tu identidad (o lo construimos a medida), conectamos inventario y envíos, y te lo entregamos con un walkthrough de 30 min. De cero a primera venta en días.",

  "cadence.eyebrow": "nuestro SaaS",
  "cadence.lead": "Nuestro SaaS para comunidades activas. Una web profesional que se gestiona por chat — sin CMS, sin paneles.",
  "cadence.cta": "Visita cadence.club",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Eventos",
  "cadence.feature.2": "Galería",
  "cadence.feature.3": "Tienda",
  "cadence.feature.4": "Cadence AI",

  "studio.eyebrow": "el equipo",
  "studio.title.bright": "somos dos.",
  "studio.title.fade": "una señal — ingeniería y dirección creativa sintonizadas en la misma frecuencia.",
  "studio.mission.title": "Sintonicemos",
  "studio.mission.body": "Si tu marca tiene señal, la amplificamos. Equipo pequeño, ancho de banda completo — sin handoffs, sin capa intermedia.",
  "studio.mission.cta": "Reservar llamada",
  "studio.team.alex.role": "Ingeniería",
  "studio.team.alex.bio": "8 años construyendo en Flutter y mobile. Arquitectura, apps y plataformas SaaS.",
  "studio.team.ela.role": "Dirección creativa",
  "studio.team.ela.bio": "Branding, identidad visual y contenido. Sintoniza la señal.",
  "studio.team.atPulsar": "en pulsar",

  "footer.cta": "Discovery call",
  "footer.nav.label": "Navegación",
  "footer.social.label": "Social",
  "footer.home": "Inicio",
  "footer.location": "Madrid · España",

  "consent.text": "Usamos cookies para entender cómo funciona el sitio y mejorarlo. Acepta o rechaza — no afecta la navegación.",
  "consent.accept": "Aceptar",
  "consent.reject": "Rechazar",

  "lang.label": "Idioma",
};

export const fr: Dict = {
  "nav.services": "Services",
  "nav.cadence": "Cadence",
  "nav.team": "Équipe",
  "nav.contact": "Contact",
  "nav.home": "Accueil",

  "hero.services.0": "Branding & direction créative",
  "hero.services.1": "Design et développement web",
  "hero.services.2": "Apps mobiles · Flutter",
  "hero.services.3": "Cadence — notre SaaS",
  "hero.tagline": "Design et code pour les marques en mouvement.",
  "hero.description": "Un signal, deux opérateurs. Design et code pour les clubs, salles et communautés qui bougent.",
  "hero.cta": "Réserver un appel",

  "intro.bright": "Nous sommes Pulsar.",
  "intro.tagline": "Design et code pour les marques en mouvement.",
  "intro.sub.html": "Un signal, deux opérateurs. Design et code pour les <span class=\"intro-emph\">clubs</span>, <span class=\"intro-emph\">salles</span> et <span class=\"intro-emph\">communautés</span> qui bougent.",
  "intro.cta": "Réserver un appel",

  "services.eyebrow": "Ce qu'on livre",
  "services.title": "services.",
  "services.subtitle": "Combinez selon vos besoins — chaque service fonctionne seul.",
  "services.categories.label": "Catégories",
  "services.cta": "Commencer",
  "services.external.cadence": "Voir cadence.club",

  "services.cadence.title": "Cadence",
  "services.cadence.lead": "Notre SaaS pour les communautés actives. Un site professionnel que votre équipe gère par chat — pas de CMS, pas de panneaux d'admin, pas de formation. Multi-tenant, avec événements, galerie, boutique et Cadence AI intégré. Le produit phare auquel tout le reste se connecte.",
  "services.cadence.cta": "Voir Cadence",

  "services.brand.title": "Identité de marque",
  "services.brand.lead": "Une identité visuelle complète que vos membres reconnaissent au premier coup d'œil — logo, palette, typographie, charte graphique, applications digitales et imprimées. On commence par un discovery (ce qui rend votre espace unique), on construit le système, et on livre une charte que vous pouvez confier à n'importe qui. Conçu pour scaler : fonctionne sur un flyer, une Story, un t-shirt ou un mur de compétition.",

  "services.web.title": "Site web",
  "services.web.lead": "Design et développement web sur mesure pour votre studio, club ou communauté. Construit pour la vitesse, le SEO et la conversion réelle — réservation, votre histoire, programmes, contact, tout au même endroit. Astro ou Next côté front, Sanity ou le CMS de votre choix pour le contenu, déploiement sur Vercel ou Firebase. Optimisé pour les Core Web Vitals dès le lancement, accessible par défaut, à vous, sans dépendance de template.",

  "services.app.title": "App mobile",
  "services.app.lead": "Une vraie app iOS et Android dans la main de votre communauté en quelques semaines, pas en mois. Construite sur Flutter (un seul codebase, les deux stores) + Supabase (auth, base de données, storage, temps réel). Réservations, programmes d'entraînement, contenu membres, notifications push — scope MVP focalisé, livré sur TestFlight et Play Console en 14–28 jours.",

  "services.media.title": "Photo et vidéo",
  "services.media.lead": "Photos de téléphone amplifiées en matériel pro qui ne sent pas le stock. Photos améliorées par IA pour les menus de cours et les carrousels Instagram, kits d'identité d'événement que les gens screenshotent (poster + templates Stories + flyer + bannière email), et vidéos promo qui bougent — slideshow, kinetic-text ou génératif — adaptées à chaque canal. Tout on-brand, livraison rapide.",

  "services.shop.title": "Boutique en ligne",
  "services.shop.lead": "Une boutique Shopify prête à vendre votre merch, vos packs de cours et vos billets d'événements — sans y perdre un week-end de setup technique. On configure les paiements, on installe vos 10 premiers produits, on monte un theme aligné avec votre identité (ou on en construit un sur mesure), on connecte stock et expédition, et on vous remet le tout avec un walkthrough de 30 min. De zéro à première vente en quelques jours.",

  "cadence.eyebrow": "notre SaaS",
  "cadence.lead": "Notre SaaS pour les communautés actives. Un site professionnel géré par chat — pas de CMS, pas de panneaux.",
  "cadence.cta": "Voir cadence.club",
  "cadence.feature.0": "Multi-tenant",
  "cadence.feature.1": "Événements",
  "cadence.feature.2": "Galerie",
  "cadence.feature.3": "Boutique",
  "cadence.feature.4": "Cadence AI",

  "studio.eyebrow": "l'équipe",
  "studio.title.bright": "nous sommes deux.",
  "studio.title.fade": "un signal — ingénierie et direction créative accordées sur la même fréquence.",
  "studio.mission.title": "Mettons-nous sur la même fréquence",
  "studio.mission.body": "Si votre marque a un signal, on l'amplifie. Petite équipe, bande passante totale — pas de handoffs, pas de couche intermédiaire.",
  "studio.mission.cta": "Réserver un appel",
  "studio.team.alex.role": "Ingénierie",
  "studio.team.alex.bio": "8 ans à construire en Flutter et mobile. Architecture, apps et plateformes SaaS.",
  "studio.team.ela.role": "Direction créative",
  "studio.team.ela.bio": "Branding, identité visuelle et contenu. Accorde le signal.",
  "studio.team.atPulsar": "chez pulsar",

  "footer.cta": "Discovery call",
  "footer.nav.label": "Navigation",
  "footer.social.label": "Social",
  "footer.home": "Accueil",
  "footer.location": "Madrid · Espagne",

  "consent.text": "Nous utilisons des cookies pour comprendre comment le site fonctionne et l'améliorer. Acceptez ou rejetez — cela n'affectera pas la navigation.",
  "consent.accept": "Accepter",
  "consent.reject": "Rejeter",

  "lang.label": "Langue",
};

export const dict: Record<Locale, Dict> = { en, es, fr };

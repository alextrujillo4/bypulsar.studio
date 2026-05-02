# Pulsar Studio — Architecture

> Documento interno. No es material de cliente.
> Última actualización: mayo 2026

Este archivo separa **lo que es estable** (marca, stack, operativa) de **lo que es temporal** (placeholders, IDs pendientes, imágenes de stock que se reemplazarán).

Cuando un item temporal se sustituya por su valor real, mover su línea a la sección "Estable" correspondiente y borrarla de "Temporal".

**El sistema visual completo (paleta, tipografía, clases `ds-*`, patrones de composición) vive en [`STYLES.md`](./STYLES.md).** Este archivo solo cubre la arquitectura técnica.

---

## 1 — Marca y posicionamiento

### Estable (esto NO cambia)

- **Marca pública:** Pulsar Studio
- **Dominio:** `bypulsar.studio`
- **Posicionamiento:** estudio digital boutique para marcas wellness — running, yoga, gym, padel, outdoor
- **Equipo público:**
  - Alexandro Trujillo · Engineering — 8 años en Flutter & mobile. Arquitectura, apps, plataformas SaaS.
  - Ela Reyna · Creative direction — Branding, identidad visual, contenido.
- **Base:** Madrid · Mercado: España → LATAM

### Regla absoluta

> **Inercia** (entidad facturadora) NO aparece en NINGÚN material público:
> ni footer, ni meta tags, ni copy, ni imágenes, ni assets de redes.
> Si en el futuro hay obligación legal (aviso legal/política de privacidad), se hace en una ruta `/legal` con disclosure mínimo.

### Líneas de servicio (todas al mismo nivel)

1. Branding y dirección creativa
2. Web profesional
3. Apps móviles y MVPs (Flutter + Supabase)
4. AI assets (photo boost, event identity, video promo)
5. Shopify setup
6. **Cadence** — SaaS propio multi-tenant para comunidades wellness, web gestionada por chat. Es **una línea más**, no la empresa entera. Un cliente puede contratar el estudio sin Cadence.

---

## 2 — Stack y arquitectura

### Estable

| Capa | Tecnología | Versión | Rol |
|---|---|---|---|
| Framework | Astro | ^4.5 | SSR + content-driven |
| Lenguaje | TypeScript | ^5.4 | Strict (`astro/tsconfigs/strict`) |
| Estilos | Tailwind CSS | ^3.4 | + `@tailwindcss/typography` |
| Iconos | `astro-icon` + `@iconify-json/lucide` | ^1.1 | Line icons sin runtime |
| Smooth scroll | `lenis` | ^1.1 | Scroll global suave |
| Render | `output: "server"` + `@astrojs/node` standalone | — | SSR |
| Hosting | Firebase Hosting + `webframeworks` | — | Region `europe-west1` |

### Estructura de carpetas

```
src/
  components/      .astro reutilizables
  config.ts        single source of truth (brand, team, services, social)
  env.d.ts         types
  layouts/
    Layout.astro   SEO, fonts, Lenis init, GA4/Clarity gateados, IntroOverlay, ConsentBanner
  pages/
    index.astro    home — compone todas las secciones
  styles/
    globals.css    body/html, [data-reveal], reduced-motion (importa ds.css)
    ds.css         design system — clases ds-* en @layer components
public/            assets estáticos
.github/workflows/
  ci-deploy.yml    CI (build en PR) + Deploy (push a main → Firebase)
ARCHITECTURE.md    este documento
STYLES.md          design system completo (tokens, ds-*, patrones)
CLAUDE.md          contexto para asistentes IA
```

---

## 3 — Sistema visual

> **El design system completo vive en [`STYLES.md`](./STYLES.md).** Incluye tokens de color/tipografía/spacing, todas las clases `ds-*` (botones, layouts, cards, headings), patrones de composición y la regla del 2 (cuándo promover utilidades a clases).

Resumen de alto nivel para arquitectura:

- **Paleta dual:** light `#F0F0F0` por defecto + dark `#0A0A0A` (token `ink`) para el hero y futuros bloques CTA oscuros. Sin acento de color.
- **Marca pública:** wordmark lowercase (`pulsar`).
- **Tipografía:** Inter (display + body) + IBM Plex Sans (labels uppercase). Cargadas vía Google Fonts. Títulos de sección lowercase con punto final (`studio.`, `services.`).
- **Centralización:** todo lo visual repetible vive en `src/styles/ds.css` como clases `ds-*`. Los componentes componen, no apilan utilidades. Detalles en STYLES.md.
- **Smooth scroll:** Lenis. **Reveals on-mount:** CSS puro con `[data-reveal]` + `--reveal-delay`. **Animaciones pesadas:** ninguna librería JS de animación.

### Intro animation

Preloader full-screen monocromo dark, primera carga por sesión.

| Fase | t (s) | Qué pasa |
|---|---|---|
| 1 — Letras entran | 0 → 1.0 | `p-u-l-s-a-r` lowercase suben desde abajo, stagger 0.1s, 0.5s cada una |
| 2 — Hold | 1.0 → 2.5 | Wordmark `pulsar` estable |
| 3 — Letras salen | 2.5 → 3.1 | Suben fuera, stagger reverso 0.05s |
| 4 — Overlay sube | 3.3 → 4.1 | Fondo negro se desliza arriba, revela home |
| 5 — Hero reveal | 4.1 → 5.0 | Hero hace fade-up con stagger por elemento |

CSS puro (`--i` + `animation-delay`), sin JS. Gateado por `sessionStorage["pulsar-intro-seen"]`. Respeta `prefers-reduced-motion: reduce`.

---

## 4 — Setup temporal (placeholders — NO son la versión final)

Esta sección lista todo lo que está como TODO. Cuando se reemplace por valor real, mover la línea a la sección estable correspondiente.

### IDs pendientes

- [ ] Firebase project IDs en `.firebaserc` (`TODO-pulsar-studio-staging`, `TODO-pulsar-studio-prod`)
- [ ] `FIREBASE_TOKEN` en GitHub Secrets — generar con `firebase login:ci`
- [ ] GA4 measurement ID (`G-XXXXXXXX`) en `src/config.ts → tracking.ga4Id`
- [ ] Microsoft Clarity project ID en `src/config.ts → tracking.clarityId`
- [ ] (Cuando se añada) ActiveCampaign IDs para newsletter inline

### Datos de contacto pendientes

En `src/config.ts → social`:

- [ ] `email` — sugerencia: `hello@bypulsar.studio`
- [ ] `instagram` — handle real
- [x] `calendly` — usando `https://calendly.com/inercia/30min` temporalmente. **TODO**: migrar a un slug `pulsar`/`bypulsar` cuando esté disponible para no exponer "inercia" en la URL pública del booking.

### Imágenes temporales (Unsplash)

v1 usa **Unsplash** para placeholders. URLs específicas (no `source.unsplash.com/random`, deprecated).

- Áreas con Unsplash:
  - Hero — foto wellness amplia (cuando se añada al diseño)
  - Algunas cards de Services (opcional)
- Áreas SIN Unsplash (riesgo de fake):
  - Equipo (Alexandro + Ela): placeholder geométrico con iniciales hasta tener fotos reales
- [ ] Reemplazar por fotos propias / fotos de proyectos cuando estén
- [ ] `public/og-image.png` 1200×630 — sin imagen OG aún, fallback al título

### Funcionalidad diferida (no en v1, planificada)

- [ ] Página `/projects` con portfolio real (cuando haya 3+ proyectos publicables)
- [ ] Newsletter inline (ActiveCampaign + Cloudflare Turnstile)
- [ ] Blog markdown (content collection + reading-time plugin)
- [ ] Página `/legal` — solo si legalmente necesario
- [ ] OG image dinámica
- [ ] Custom cursor / parallax / video backgrounds (cuando haya assets)

---

## 5 — Operativa

### Deploy

- Push a `main` → GitHub Actions → `firebase deploy --project prod`
- Pull requests → solo `npm run build` (no deploy)
- Concurrency lock para evitar deploys simultáneos
- Cada runner ejecuta `firebase experiments:enable webframeworks` antes del deploy (no se persiste; debe correr en cada job)

### Ramas

- `main` → producción
- `claude/*` o feature branches → desarrollo

### Comandos útiles

```bash
npm run dev       # Dev server (http://localhost:4321)
npm run build     # astro check && astro build (TS check + bundle SSR)
npm run preview   # Preview del build SSR
```

### Dolores conocidos heredados

- `firebase deploy` requiere `webframeworks` enabled en cada CI runner — ya añadido al workflow
- `astro check` bloquea el build si hay errores TS — instalar Astro plugin del editor para detectarlos pronto
- SSR cold starts ~1-2s tras inactividad. Si pasa a ser problema, evaluar `output: "static"`
- `dist/` está en `.gitignore` desde día 1 (corrige el dolor heredado del proyecto anterior)

---

## 6 — Consent y privacidad

### Estable

- Banner inferior con `localStorage["ba-consent"]`
- GA4 + Clarity cargan **solo tras "Aceptar"** (script tags con `type="text/plain"` + `data-consent-gated`, reactivados por JS al consent)
- Sin aceptación → cero requests de tracking

### Pendiente

- [ ] Texto del banner — actual es genérico, refinar con tono de marca
- [ ] Si en el futuro hay aviso legal/cookies policy formal, añadir link en el banner

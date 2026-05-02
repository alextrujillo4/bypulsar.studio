# Pulsar Studio — Architecture

> Documento interno. No es material de cliente.
> Última actualización: mayo 2026

Este archivo separa **lo que es estable** (la versión definitiva de la marca, el stack y el sistema visual) de **lo que es temporal** (placeholders, IDs pendientes, imágenes de stock que se reemplazarán).

Cuando un item temporal se sustituya por su valor real, mover su línea a la sección "Estable" correspondiente y borrarla de "Temporal".

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
public/            assets estáticos
.github/workflows/
  ci-deploy.yml    CI (build en PR) + Deploy (push a main → Firebase)
ARCHITECTURE.md    este documento
```

---

## 3 — Sistema visual

### Estable

**Paleta — monocromo:**

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0A0A0A` | Fondo global |
| `fg` | `#F5F5F5` | Texto principal |
| `muted` | `#7A7A7A` | Texto secundario, captions |
| `line` | `#1F1F1F` | Bordes sutiles, separadores |
| `card` | `#141414` | Fondo de cards y secciones contrastadas |

Sin acento de color en v1 — el contraste es la fuerza (estilo Fabrica template).

**Tipografía:**

- Display + body: **Inter** (Google Fonts), pesos 400–900
- Labels y captions: **IBM Plex Sans** uppercase + tracking wide
- Tamaños display: `clamp(56px, 11vw, 160px)` para H1, `clamp(40px, 6vw, 80px)` para H2

**Border radius:**

- Cards: `rounded-2xl` (16px)
- Imágenes: `rounded-xl`
- Buttons / inputs / pills: `rounded-full`
- Sections: sin radius

**Animaciones:**

- Hovers: Tailwind transitions (`transition-colors`, `transition-transform`, `duration-200/300`)
- Reveals on-mount: CSS animations puras (atributo `data-reveal` + `--reveal-delay`)
- Smooth scroll global: Lenis
- Sin frameworks de animación JS extra

### Intro animation (estable)

Preloader full-screen monocromo, primera carga por sesión.

| Fase | t (s) | Qué pasa |
|---|---|---|
| 1 — Letras entran | 0 → 1.0 | "P-U-L-S-A-R" suben desde abajo, stagger 0.1s, 0.5s cada una |
| 2 — Hold | 1.0 → 2.5 | Logo estable |
| 3 — Letras salen | 2.5 → 3.1 | Suben fuera, stagger reverso 0.05s |
| 4 — Overlay sube | 3.3 → 4.1 | Fondo negro se desliza arriba, revela home |
| 5 — Hero reveal | 4.1 → 5.0 | Hero hace fade-up con stagger por elemento |

**Detalles:**

- Implementado con **CSS puro** (`--i` + `animation-delay`), sin JS de animación
- Skip en cargas posteriores: `sessionStorage["pulsar-intro-seen"]`
- Respeta `@media (prefers-reduced-motion: reduce)` → skip total

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
- [ ] `calendly` — URL del Calendly

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

# Pulsar Studio — Styles & Design System

> Documento interno. Referencia para tokens, clases y composición visual.
> Última actualización: mayo 2026

Sistema visual completo. Para arquitectura, stack y operativa, ver [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## 1 — Filosofía

**Inspiración visual:** [Fabrica template](https://fabrica.framer.media/) — wordmark lowercase, hero oscuro con foto, resto del sitio en off-white claro, tipografía grande con punto final ("projects.", "studio."), bordes muy redondeados (`rounded-3xl`), sin acentos de color.

**Centralizado, no atomizado.** Todo lo visual repetible vive como clase `ds-*` en `src/styles/ds.css`. Los componentes Astro componen esas clases.

**Tres niveles, en orden de preferencia:**

1. **`ds-*`** — clases de sistema. Primera elección.
2. **Tailwind utility** — para variaciones puntuales (`mt-12`, `max-w-2xl`).
3. **CSS custom** en `<style>` del componente — solo si Tailwind no llega.

**Regla del 2:** si una combinación Tailwind aparece **2 veces**, se promueve a `ds-*`.

---

## 2 — Sistema de dos superficies

El sitio tiene **dos superficies**:

- **Light (default)** — fondo off-white `#F0F0F0`, texto negro. Usado en body y todas las secciones excepto el hero.
- **Dark / "ink"** — fondo casi negro `#0A0A0A`, texto claro. Usado SOLO en el hero (con foto de fondo) y, en el futuro, en CTA blocks oscuros si se añaden.

**Cómo se aplica:**

- Body por defecto es light. No hace falta escribir nada.
- Para hacer una sección dark, añade la clase **`ds-ink`** al elemento `<section>`. Las clases `ds-*` hijas que dependen del color (label, body, link, border) se adaptan automáticamente.
- Algunos componentes tienen variantes explícitas `*-dark` (`ds-btn-primary-dark`, `ds-btn-ghost-dark`, `ds-btn-pill-dark`, `ds-card-dark`) cuando un componente concreto en una superficie dark necesita estilos distintos al adaptativo.

---

## 3 — Tokens de color

Definidos en `tailwind.config.mjs`.

### Default surface (DARK)

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0A0A0A` | Fondo body |
| `fg` | `#F5F5F5` | Texto principal |
| `muted` | `#9A9A9A` | Texto secundario, captions |
| `line` | `#1F1F1F` | Bordes, separadores |
| `card` | `#141414` | Cards elevadas sobre body dark |

### "ink" namespace (alias)

Mismos valores que las base tokens — se mantiene el namespace porque `ds-ink-card`, `ds-btn-primary-dark`, etc. lo referencian. La diferenciación visual de las ink cards viene del **gradient + grain ::before**, no del color flat.

### White card (contraste deliberado)

`ds-white-card` usa `#FFFFFF` hardcoded. Es un **momento de luz** intencional contra el body dark — único lugar de la home con texto oscuro sobre fondo claro (sección Studio).

**Sin acento de color.** El contraste dark/elevated dark/white es la fuerza.

---

## 4 — Tipografía

| Familia | Uso |
|---|---|
| `Inter` (Google Fonts, 400–900) | Display + body — `font-sans` y `font-display` |
| `IBM Plex Sans` (Google Fonts, 400–600) | Labels uppercase — `font-mono` |

### Escala

| Clase | Tamaño | Uso |
|---|---|---|
| `ds-heading-mega` | `clamp(64px, 11vw, 180px)` | Wordmark hero "pulsar" |
| `ds-heading-section` | `clamp(40px, 7vw, 110px)` | Títulos de sección "studio.", "services." (lowercase + punto final) |
| `ds-heading-sub` | `clamp(20px, 2.4vw, 30px)` | Nombres de cards, subtítulos |
| `ds-body` | 16–18px | Cuerpo de texto |
| `ds-label` | 12px uppercase tracked | Labels secundarios "studio.", "01" |
| `ds-italic` | — | Variante itálica light para énfasis al cierre |

**Convención lowercase:** títulos de sección (`ds-heading-section`) están **siempre en minúsculas con punto final** (`studio.`, `services.`, `approach.`, `contact.`). El wordmark también es lowercase (`pulsar`).

**Tracking:** `tracking-tightest` (`-0.04em`) para `ds-heading-section`. `letter-spacing: -0.06em` para `ds-heading-mega` (más apretado).

---

## 5 — Border radius

| Token | Valor | Uso |
|---|---|---|
| `rounded-3xl` | 24px | Cards (más redondeado, estilo Fabrica) |
| `rounded-2xl` | 16px | Cards interiores, avatar boxes |
| `rounded-xl` | 12px | Imágenes, mini-elementos |
| `rounded-full` | pill | Buttons, inputs |
| `rounded-none` | 0 | Sections, containers grandes |

---

## 6 — Espaciado

| Patrón | Valor | Uso |
|---|---|---|
| Section vertical padding | `py-24` mobile / `py-40` desktop | `ds-section-inner` |
| Container lateral | `px-6` mobile / `px-10` md / `px-16` lg | `ds-container` |
| Max-width | `1440px` | Container global |

---

## 7 — Animaciones

Definidas en `tailwind.config.mjs`, `src/styles/globals.css`, `IntroOverlay.astro`.

| Nombre | Trigger | Duración |
|---|---|---|
| `marquee` | `animate-marquee` | 40s loop |
| `fade-up` (vía `[data-reveal]`) | mount | 0.8s, gateado por intro |
| `letter-in/out` | scoped intro | 0.5s c/u |
| `intro-out` | scoped intro | 0.8s |
| `nav-in` | scoped overlay menu | 0.4s |

**Reveals on-load:** atributo `data-reveal` + opcional `style="--reveal-delay: 0.15s"`. Auto-gateado por la animación intro (espera a `t=4.1s`).

---

## 8 — Catálogo de clases `ds-*`

### Surfaces

| Clase | Uso |
|---|---|
| `ds-ink` | Aplicar a un block para flipearlo a dark surface (hero, CTA blocks). Las `ds-*` hijas se adaptan. |

### Layout

| Clase | Uso |
|---|---|
| `ds-section` | Borde superior estándar (border-line en light, border-ink-line en dark) |
| `ds-section-inner` | Container con padding vertical generoso (`py-24 md:py-40`) |
| `ds-section-inner-tight` | Variante compacta (footer) |
| `ds-container` | Container sin padding vertical |

### Typography

| Clase | Uso |
|---|---|
| `ds-label` | Mini-label uppercase ("studio.", "+ EMAIL") |
| `ds-heading-mega` | Wordmark hero (lowercase, gigante) |
| `ds-heading-section` | Título de sección (lowercase + punto final) |
| `ds-heading-sub` | Subtítulo / nombre en card |
| `ds-italic` | Itálica light de énfasis |
| `ds-body` | Párrafo cuerpo |

### Buttons

| Clase | Uso |
|---|---|
| `ds-btn` | Base — pill, padding, transition. Sin color. |
| `ds-btn-primary` | CTA principal en light surface (negro sobre claro) |
| `ds-btn-primary-dark` | CTA principal en dark surface (claro sobre negro) |
| `ds-btn-ghost` | CTA secundario en light |
| `ds-btn-ghost-dark` | CTA secundario en dark |
| `ds-btn-pill` | Variante header en light (card bg, hover invierte) |
| `ds-btn-pill-dark` | Variante header en dark |

### Links

| Clase | Uso |
|---|---|
| `ds-link` | Link inline (muted → fg en hover; adaptativo) |
| `ds-link-external` | `ds-link` + `inline-flex` para encajar el `↗` |

### Cards

| Clase | Uso |
|---|---|
| `ds-card` | Base white card on light bg (rounded-3xl) |
| `ds-card-hover` | `ds-card` + hover sutil |
| `ds-card-dark` | Card oscura sobre dark surface |
| `ds-card-invert` | Card clicable que invierte a dark on hover (ej: Cadence externa) |

### Header

| Clase | Uso |
|---|---|
| `ds-logo` | Wordmark lowercase con tracking tight |

### Decorativo

| Clase | Uso |
|---|---|
| `ds-plus` | Marcadores `+` decorativos del grid (Fabrica-style) |

### Rounded card sections (ink + white)

Patrón Fabrica: el contenido vive en una **rounded card** que flota sobre el bg light. La card puede ser oscura (hero, services) o blanca (studio).

| Clase | Uso |
|---|---|
| `ds-section-card-wrap` | Wrapper outer — padding uniforme `p-2 md:p-3 lg:p-4` (8/12/16px en los 4 lados) para que la card vaya casi edge-to-edge |
| `ds-ink-card` | Card OSCURA con `border-radius` grande, gradientes radiales + grain (pseudo `::before`), color de texto adaptado a dark |
| `ds-ink-card-inner` | Padding interno generoso `clamp(2rem, 5vw, 5rem)` |
| `ds-white-card` | Card BLANCA con mismo `border-radius`, sin grain (limpia) |
| `ds-white-card-inner` | Mismo padding interno que ink-card-inner |

**Patrón de ritmo de página (alternancia ink ↔ white card ↔ light bg):**

```
Header        (sticky, translucent dark, light text)         ← dark bg
Hero          (ds-section-card-wrap > rounded ink + cloud)   ← INK card + blue cloud
Intro         (no card — body shows through)                 ← dark bg + watermark
Services      (ds-section-card-wrap > ds-ink-card)           ← INK card
Cadence       (ds-section-card-wrap > ds-ink-card)           ← INK card
Team          (ds-section-card-wrap > ds-white-card)         ← WHITE card (moment of light)
Footer        (no card — body shows through)                 ← dark bg + huge wordmark + CTA
```

**Reglas:**
- Las **cards** (ink o white) son bloques destacados de contenido que SE TAPAN entre sí — el cursor glow no asoma a través.
- Las **secciones planas** (Intro, Footer) no tienen card → el body bg dark queda visible y el cursor glow ilumina la zona.
- `id="contact"` vive en la primera columna del footer para que el ancla del nav siga funcionando.

**Reglas:**
- Las **cards** (ink o white) son bloques destacados de contenido. Hero, Studio y Services las usan.
- Las **secciones planas** (`ds-section` + `ds-section-inner`) son texto-only, sin card. Approach y Contact las usan.
- El footer es plano (sin card) con un wordmark gigante al final.

**Hero específico:** no usa la clase `ds-ink-card` directamente porque tiene su propia capa de foto + overlay; replica la signature visual (rounded corners + grain) en su scope. Si en el futuro hay otra sección dark con foto, considerar promover esto a `ds-ink-card-photo`.

El bloque de Services usa `<details>`/`<summary>` nativos para el acordeón (primera entrada `open` por defecto, sin JS). Los toggles `+/−` están construidos con `::before`/`::after` pseudo-elementos que rotan al cambiar el atributo `[open]`.

---

## 9 — Composición de la home

### Hero (dark surface, único bloque ink)

```astro
<section class="ds-ink hero">
  <img src="..." class="hero-bg" />     <!-- foto wellness oscura -->
  <div class="hero-overlay" />          <!-- gradient para legibilidad -->
  <div class="hero-inner ds-container">
    Top:    [wordmark "pulsar" + "studio"]     [services list]
    Plus:   [+  +  +  +]                       <!-- ds-plus markers -->
    Bottom: [tagline two-tone]                 [CTA card "hablemos"]
    Foot:   [© 2026 Pulsar Studio]
  </div>
</section>
```

### Resto de secciones (light surface)

Patrón estándar:

```astro
<section id="..." class="ds-section">
  <div class="ds-section-inner">
    <p class="ds-label mb-12">studio.</p>
    <h2 class="ds-heading-section mb-20">somos dos.</h2>
    <!-- contenido en grid -->
  </div>
</section>
```

### Header

Fixed top-right hamburger sobre el hero (con `mix-blend-mode: difference` para legibilidad sobre cualquier fondo). Click → overlay full-screen white con nav stacked centrado, links lowercase grandes, email + copyright abajo.

---

## 10 — Cuándo añadir CSS custom

Solo en estos casos:

1. **Animación local complicada** (`IntroOverlay`, `Hero`, `Header overlay`) — los keyframes solo aplican ahí
2. **Composición geométrica específica** (CTA card del hero con avatar + body + pill anidado) — más legible scoped que con Tailwind apilado
3. **Pseudo-elementos** o efectos no expresables en Tailwind sin hacks
4. **Posicionamiento fixed/sticky** que necesita aislamiento (hamburger + blend mode)

Si el CSS custom acaba siendo reusable → promoverlo a `ds.css`.

---

## 11 — Migración / extensión

Cuando aparezca un nuevo patrón:

1. Diseñarlo apilando Tailwind utilities en el componente
2. Si se reutiliza en 2+ sitios → mover a `ds.css` con nombre semántico
3. Documentar la nueva clase aquí en la tabla correspondiente
4. Buscar usos previos del patrón Tailwind apilado y reemplazar

**Regla operativa:** este archivo es la fuente de verdad de "qué clases existen". Si no está aquí, no existe oficialmente.

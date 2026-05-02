# Pulsar Studio — Styles & Design System

> Documento interno. Referencia para tokens, clases y composición visual.
> Última actualización: mayo 2026

Este archivo cubre **todo lo visual**: tokens, clases del design system, patrones de composición, y reglas de cuándo usar `ds-*` vs Tailwind raw vs CSS custom. Para arquitectura, stack y operativa, ver [`ARCHITECTURE.md`](./ARCHITECTURE.md).

---

## 1 — Filosofía

**Centralizado, no atomizado.** Todo lo visual repetible vive como clase `ds-*` en `src/styles/ds.css`. Los componentes Astro componen esas clases, no apilan utilidades Tailwind.

**Tres niveles, en orden de preferencia:**

1. **`ds-*`** — clases de sistema (botón primario, sección, label). Primera elección.
2. **Tailwind utility** — para variaciones puntuales (`mt-12`, `max-w-2xl`, layout específico).
3. **CSS custom** en `<style>` del componente — solo si Tailwind no llega y la regla es local.

**Regla del 2:** si una combinación Tailwind aparece **2 veces**, se promueve a `ds-*`.

**Inspiración visual:** [Fabrica Framer template](https://fabrica.framer.media/) — monocromo bold, tipografía display grande, grid estructurado.

---

## 2 — Tokens

Definidos en `tailwind.config.mjs`. Disponibles como utilidades Tailwind (`bg-bg`, `text-fg`, etc.).

### Color (monocromo)

| Token | Hex | Uso |
|---|---|---|
| `bg` | `#0A0A0A` | Fondo global |
| `fg` | `#F5F5F5` | Texto principal |
| `muted` | `#7A7A7A` | Texto secundario, captions |
| `line` | `#1F1F1F` | Bordes, separadores |
| `card` | `#141414` | Fondo de cards |

**Sin acento de color en v1.** El contraste blanco/negro es la fuerza. Si en el futuro se añade un único acento, va aquí como `accent`.

### Tipografía

| Familia | Uso |
|---|---|
| `Inter` (Google Fonts, 400–900) | Display + body — `font-sans` y `font-display` |
| `IBM Plex Sans` (Google Fonts, 400–600) | Labels uppercase — `font-mono` |

**Escala display:**
- Hero: `clamp(56px, 11vw, 160px)` → clase `ds-heading-hero`
- Sección H2: `clamp(40px, 6vw, 80px)` → clase `ds-heading-section`
- Contact H2 (más grande): `clamp(48px, 9vw, 140px)` → clase `ds-heading-contact`

**Tracking:** `tracking-tightest` (`-0.04em`) en displays. `tracking-[0.2em]` en labels uppercase.

### Border radius

| Token | Valor | Uso |
|---|---|---|
| `rounded-2xl` | 16px | Cards |
| `rounded-xl` | 12px | Imágenes |
| `rounded-full` | pill | Buttons, inputs, banners |
| `rounded-none` | 0 | Sections, containers grandes |

### Espaciado vertical (secciones)

- Padding section vertical: `py-24` mobile / `py-40` desktop → encapsulado en `ds-section-inner`
- Padding lateral container: `px-6` mobile / `px-10` md / `px-16` lg → encapsulado en `ds-container`
- Max-width: `1440px` (`max-w-[1440px]`)

### Animaciones

Definidas globalmente en `tailwind.config.mjs` y `src/styles/globals.css`.

| Nombre | Trigger | Duración |
|---|---|---|
| `marquee` | clase Tailwind `animate-marquee` | 40s loop |
| `fade-up` | clase `animate-fade-up` o `[data-reveal]` | 0.8s ease-out |
| `letter-in` / `letter-out` | scoped en `IntroOverlay` | 0.5s |
| `intro-out` | scoped en `IntroOverlay` | 0.8s |

**Reveals on-load:** atributo `data-reveal` + opcional `style="--reveal-delay: 0.15s"` para staggear. Auto-gateado por la animación intro (espera a `t=4.1s`).

---

## 3 — Clases del Design System (`ds-*`)

Todas viven en `src/styles/ds.css` dentro de `@layer components`. Se importan vía `src/styles/globals.css` desde `Layout.astro`.

### Layout

| Clase | Equivalente Tailwind | Uso |
|---|---|---|
| `ds-section` | `border-t border-line` | Borde superior estándar entre secciones |
| `ds-section-inner` | container + `py-24 md:py-40` | Wrapper interno con padding generoso |
| `ds-section-inner-tight` | container + `py-12` | Variante compacta (footer) |
| `ds-container` | `mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16` | Container sin padding vertical |

**Patrón:**
```html
<section class="ds-section">
  <div class="ds-section-inner">
    ...
  </div>
</section>
```

### Tipografía

| Clase | Uso |
|---|---|
| `ds-label` | Mini-label uppercase ("01 / Studio", "PULSAR · MADRID") |
| `ds-heading-hero` | H1 del hero (clamp 56–160px) |
| `ds-heading-section` | H2 estándar (clamp 40–80px) |
| `ds-heading-contact` | H2 grande del contacto (clamp 48–140px) |
| `ds-italic` | Variante itálica light para enfatizar (cierre de frase) |
| `ds-body` | Párrafo cuerpo medio (`text-base md:text-lg text-muted leading-relaxed`) |

### Buttons

| Clase | Uso |
|---|---|
| `ds-btn` | Base — pill, padding, transition. Sin color. |
| `ds-btn-primary` | CTA principal: blanco sobre negro, hover muted |
| `ds-btn-ghost` | CTA secundario: borde, hover card |
| `ds-btn-pill` | Variante header: card de fondo, hover invierte a blanco |

### Links

| Clase | Uso |
|---|---|
| `ds-link` | Link inline de texto (muted → fg en hover) |
| `ds-link-external` | `ds-link` + `inline-flex` para encajar el `↗` |

### Cards

| Clase | Uso |
|---|---|
| `ds-card` | Base: rounded-2xl + border + bg-card + padding |
| `ds-card-hover` | Hover sutil → `bg-line` (cards informativas) |
| `ds-card-invert` | Hover dramático → invierte a blanco/negro (cards clicables externas — Cadence) |

### Header

| Clase | Uso |
|---|---|
| `ds-header` | Sticky + blur + borde sutil + bg semitransparente |
| `ds-logo` | Logo wordmark (Inter 800, tracking-tight) |

---

## 4 — Componentes Astro y qué clases usan

| Componente | DS clases principales | Custom (`<style>`) |
|---|---|---|
| `Layout.astro` | (importa `globals.css`) | — |
| `IntroOverlay.astro` | (scoped) | sí — animación intro completa |
| `Header.astro` | `ds-header` · `ds-logo` · `ds-link` · `ds-btn-pill` | — |
| `Hero.astro` | `ds-container` · `ds-label` · `ds-heading-hero` · `ds-italic` · `ds-body` · `ds-btn-primary` · `ds-btn-ghost` | mínimo (isolation) |
| `Studio.astro` | `ds-section` · `ds-section-inner` · `ds-label` · `ds-heading-section` · `ds-italic` · `ds-card-hover` | — |
| `Services.astro` | `ds-section` · `ds-section-inner` · `ds-label` · `ds-heading-section` | — |
| `ServiceCard.astro` | `ds-card-hover` o `ds-card-invert` · `ds-label` | — |
| `Approach.astro` | `ds-section` · `ds-section-inner` · `ds-label` · `ds-heading-section` | — |
| `Contact.astro` | `ds-section` · `ds-section-inner` · `ds-label` · `ds-heading-contact` · `ds-italic` · `ds-btn-primary` · `ds-link-external` | — |
| `Footer.astro` | `ds-section-inner-tight` · `ds-logo` · `ds-link` | — |
| `ConsentBanner.astro` | `ds-container` · `ds-btn-primary` · `ds-btn-ghost` | mínimo (position fixed) |

---

## 5 — Patrones de composición

### Sección estándar

```astro
<section id="..." class="ds-section">
  <div class="ds-section-inner">
    <p class="ds-label mb-12">## / Section name</p>
    <h2 class="ds-heading-section max-w-4xl mb-20">Título</h2>
    <!-- contenido -->
  </div>
</section>
```

### CTA dual (primario + ghost)

```astro
<div class="flex flex-wrap items-center gap-3">
  <a href="..." class="ds-btn-primary">Acción primaria <span aria-hidden="true">→</span></a>
  <a href="..." class="ds-btn-ghost">Acción secundaria</a>
</div>
```

### Reveal staggered

```astro
<p class="ds-label" data-reveal style="--reveal-delay: 0s">…</p>
<h1 class="ds-heading-hero" data-reveal style="--reveal-delay: 0.15s">…</h1>
<p class="ds-body" data-reveal style="--reveal-delay: 0.35s">…</p>
```

El intro animation termina en `t=4.1s`. Si está activo, los reveals se disparan después. Si está skipeado (`html.intro-skip`), los delays son relativos al load.

---

## 6 — Cuándo añadir CSS custom

Solo en estos casos:

1. **Animación local complicada** (ej: `IntroOverlay.astro`) — los keyframes solo aplican ahí
2. **Pseudo-elementos o efectos no expresables en Tailwind** sin hacks
3. **Posicionamiento fixed/sticky con z-index alto** que necesita aislamiento

Si el CSS custom acaba siendo reusable → promoverlo a `ds.css`.

**No usar CSS custom para:**
- Cambiar colores, padding, font-size, hover (todo eso ya lo hace Tailwind o `ds-*`)
- Override de utilidades Tailwind (mejor cambiar la utilidad)

---

## 7 — Migración / extensión

Cuando aparezca una nueva línea de servicio, sección, o variante de botón:

1. Diseñarlo primero apilando Tailwind utilities en el componente
2. Si se reutiliza en 2+ sitios → mover a `ds.css` con nombre semántico (`ds-card-feature`, `ds-btn-icon`)
3. Documentar la nueva clase aquí en la tabla correspondiente
4. Buscar usos previos del patrón Tailwind apilado y reemplazar por la nueva clase

**Regla operativa:** este archivo es la fuente de verdad de "qué clases existen". Si no está aquí, no existe oficialmente.

# CLAUDE.md — Pulsar Studio

> Contexto para asistentes IA (Claude Code, Cursor, etc.) que trabajen en este repo.
> Lee esto **antes** de modificar cualquier código.

## Qué es este proyecto

Web pública de **Pulsar Studio** — `bypulsar.studio`. Estudio digital boutique de **dos personas** (Alexandro + Ela) especializado en marcas wellness (running, yoga, gym, padel, outdoor).

**Stack:** Astro 4.5 SSR + TypeScript strict + Tailwind 3.4 + Lenis smooth scroll + Firebase Hosting (`webframeworks`).

## Documentos clave (léelos en este orden)

1. **[`ARCHITECTURE.md`](./ARCHITECTURE.md)** — marca, stack, operativa, lo estable vs lo temporal, IDs pendientes, deploy, ramas.
2. **[`STYLES.md`](./STYLES.md)** — design system completo: tokens, clases `ds-*`, patrones de composición, regla del 2.
3. **`src/config.ts`** — single source of truth para brand, team, services, social, tracking. Si cambia copy, cambia aquí.

Si vas a tocar código, abre los tres.

## Reglas absolutas (no negociables)

### 1. Naming público

- La marca pública es **Pulsar Studio**. El wordmark es **`pulsar`** lowercase (sin `®`). Las versiones largas siempre como "Pulsar Studio" (capitalizado en copy de cuerpo) o `pulsar studio` (en headings tipo Fabrica).
- **Inercia** es la entidad facturadora interna. **NUNCA** debe aparecer en código público:
  - ni en copy, meta tags, OG, footer, alt de imágenes, ni en assets
  - excepción acordada y temporal: la URL del Calendly `calendly.com/inercia/30min` (visible solo al click). Hay TODO para migrar.
- Si en una iteración alguien añade contenido público que mencione Inercia → **rechazar** o pedir confirmación explícita.

### Convención lowercase (Fabrica-style)

- Wordmark: `pulsar`
- Títulos de sección: `studio.`, `services.`, `approach.`, `contact.` (lowercase + punto final)
- Labels mini: lowercase también (`studio.`, `01`)
- Copy de cuerpo: capitalización normal de español

### 2. Cadence es UNA línea más

Cadence (el SaaS) es **una de seis líneas de servicio**, no la empresa entera. Un cliente puede contratar el estudio sin Cadence. No promocionarlo como si fuese el centro del negocio.

### 3. Estilos centralizados (la regla del 2)

- Primera elección: clases `ds-*` de `src/styles/ds.css`.
- Segunda: utilidades Tailwind para variaciones puntuales.
- Última: `<style>` scoped solo si Tailwind no llega.
- **Si una combinación Tailwind aparece 2+ veces → promoverla a `ds-*`** y documentarla en `STYLES.md`.

### 4. Inglés vs español

- Copy de la web: **español**.
- Excepciones donde se mantiene inglés (términos de industria sin traducción natural):
  - **Branding** (no "marca")
  - **Discovery call**
  - **SaaS**
  - Stack técnico: **Flutter, Supabase, Astro, Shopify, Core Web Vitals, SEO, CMS, iOS, Android, MVPs**
  - Nombre del estudio en el wordmark: **studio** (lowercase, parte del logo)
- Labels de sección en UI: **español lowercase con punto final** (`estudio.`, `servicios.`, `proceso.`, `contacto.`).
- Identificadores en código (variables, clases, archivos): **inglés**.
- Comentarios: cualquiera de los dos.

### 5. Animaciones

- CSS puro siempre que se pueda. Lenis para smooth scroll global. **No** añadir frameworks JS de animación (Motion, GSAP, Framer Motion) sin discusión previa.
- Respetar `prefers-reduced-motion: reduce` en cualquier animación nueva.

### 6. Comentarios

Por defecto **no escribir comentarios**. Solo cuando el WHY no es obvio (constraint oculto, invariante sutil, workaround específico). Los nombres de identificadores ya explican el QUÉ.

## Estructura mínima a recordar

```
src/
  components/   .astro · sin lógica de negocio, solo composición
  styles/
    ds.css      design system — fuente de verdad de clases reusables
    globals.css body, html, [data-reveal], reduced-motion (importa ds.css)
  layouts/Layout.astro    SEO, fonts, Lenis, IntroOverlay, ConsentBanner
  pages/index.astro       compone secciones
  config.ts               brand/team/services/social — si cambia copy, cambia aquí

ARCHITECTURE.md  arquitectura técnica + estable vs temporal
STYLES.md        design system + tokens + ds-* + patrones
CLAUDE.md        este archivo
```

## Tareas comunes y dónde tocar

| Tarea | Dónde |
|---|---|
| Cambiar copy del Hero/Studio/Services/Approach/Contact | `src/config.ts` (brand, team, services, approach) |
| Añadir/quitar línea de servicio | `src/config.ts → services` (el array pinta el acordeón solo). Recuerda llenar `categories: string[]` con tags cortos para los pills. |
| Cambiar email/Instagram/Calendly | `src/config.ts → social` |
| Cambiar paleta o tipografía | `tailwind.config.mjs` (tokens) + verificar `STYLES.md` |
| Añadir un nuevo botón / card / heading reusable | `src/styles/ds.css` (en `@layer components`) + documentar en `STYLES.md` |
| Cambiar duración/timing de la intro animation | `src/components/IntroOverlay.astro` (CSS scoped) + actualizar tabla en `ARCHITECTURE.md` y `STYLES.md` |
| Añadir GA4 / Clarity | `src/config.ts → tracking` (IDs) — el gating ya está en `Layout.astro` y `ConsentBanner.astro` |
| Añadir nueva sección a la home | crear `src/components/X.astro` usando `ds-section` + `ds-section-inner`, importar en `src/pages/index.astro` |

## Comandos

```bash
npm install         # primera vez
npm run dev         # http://localhost:4321
npm run build       # astro check + bundle SSR (lo que corre CI)
npm run preview     # preview del bundle SSR
```

## Antes de commitear

1. `npm run build` debe pasar (el `astro check` bloquea TS errors).
2. Si añadiste un patrón visual nuevo, ¿está en `ds.css` y documentado en `STYLES.md`?
3. ¿Hay algún placeholder/TODO nuevo? Añádelo a la sección "Setup temporal" de `ARCHITECTURE.md`.
4. ¿El cambio expone "Inercia" en algún sitio público? → revertir.

## Ramas

- `main` — producción. Push aquí dispara deploy a Firebase.
- `claude/*` o feature branches — desarrollo.

## Preguntas que hacer al usuario antes de actuar

- Si una request afecta IDs de servicios externos (Firebase project, GA4, Calendly, etc.) y no los tienes → preguntar.
- Si una request implica exponer Inercia públicamente → confirmar explícitamente.
- Si una request requiere añadir un framework de animación / librería pesada → discutir alternativas CSS-puras primero.

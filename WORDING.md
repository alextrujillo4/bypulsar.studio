# Pulsar Studio — Wording & Voice

> Documento interno. Cómo escribimos, qué decimos, qué evitamos.
> Última actualización: mayo 2026

Cualquier copy público (web, redes, propuestas, decks) debe pasar por estas reglas. Si una frase no encaja con la voz, se reescribe — no se publica "porque ya estaba".

Para arquitectura técnica → [`ARCHITECTURE.md`](./ARCHITECTURE.md). Para sistema visual → [`STYLES.md`](./STYLES.md).

---

## 1 — La voz en una frase

> **Dinámica · Espacial · Retro 90s · Una unidad.**

- **Dinámica:** habla de motion, pulse, ritmo, signal. La marca se llama Pulsar — todo vibra.
- **Espacial:** los pulsares son estrellas de neutrones. Léxico cósmico (signal, frequency, broadcast, orbit, beacon, station) sin caer en cliché sci-fi.
- **Retro 90s:** estética de terminal, transmisión, lo-fi tech. Pensar más en *"signal received"* que en *"AI-powered solutions"*.
- **Una unidad:** somos dos personas pero **un signal**. Nunca presentar a Ela y Alexandro como dos cosas separadas que se suman; siempre como dos operadores en la misma frecuencia.

## 2 — Léxico preferido

### Movimiento / pulso

motion · pulse · rhythm · cadence · momentum · drive · beat · signal · frequency · transmission · broadcast

### Cósmico / espacial

orbit · station · beacon · drift · interstellar · channel · waveform · range

### Persona / construcción

operator · engineer · builder · maker · craft · ship · build · code · design · craft

### Comunidad

clubs · communities · teams · crews · runners · riders · movers

## 3 — Léxico a evitar

| ❌ Evitar | Por qué | ✅ Usar en su lugar |
|---|---|---|
| `wellness` | Genérico, sobreusado en LinkedIn | `brands in motion` · `communities that move` · concretizar (running, yoga, padel...) |
| `agency` | Somos un estudio, no una agencia | `studio` · `two-person studio` |
| `synergy`, `leverage`, `unlock`, `transform your business` | Corporate cliché | `build`, `ship`, `tune`, `broadcast` |
| `passionate about...` | Vacío | Mostrar el qué con verbos concretos |
| `boost your conversions`, `drive results` | Sales-speak | `we design and build` |
| `delivers`, `provides`, `solutions` | Pasivo / vago | Verbos concretos: design, build, ship, tune, run |
| `Ela diseña, Alex programa` | Separa el equipo | `Engineering and creative direction tuned to the same signal.` |
| `Hola, somos Pulsar Studio y nos apasiona...` | Auto-presentación de manual | Acción primero: lo que hacemos, para quién |

## 4 — Cómo hablamos del equipo

**Regla absoluta:** Ela + Alexandro = **uno**.

Pulsar es un estudio de **dos operadores en la misma frecuencia**, no dos roles separados. El copy no debe sonar a "ella hace branding y él hace dev"; debe sonar a "trabajamos como uno con dos especialidades complementarias".

✅ **OK:**
- "Two of us. One signal."
- "Engineering and creative direction working as one studio."
- "One frequency, two operators."
- "We design and build as one team."

❌ **No:**
- "Ela hace el diseño, Alex hace el código."
- "Two designers / one developer." (separación funcional)
- "El branding lo lleva Ela, la web la lleva Alex."

En las **team cards** (en la sección Studio) se muestran como dos personas con sus roles porque eso es transparencia honesta del equipo — pero el copy alrededor sigue siendo de unidad.

## 5 — Reglas de escritura

- **Activa, no pasiva.** "We design and build" > "Designs and builds are provided by us".
- **"We", no "the team" / "they".** Hablamos en primera persona del plural.
- **Verbos concretos.** build, ship, tune, broadcast, code, craft, design — no deliver, provide, leverage.
- **Frases cortas.** Punchy. La voz es lo-fi, no académica.
- **Lowercase es estilístico.** El wordmark `pulsar` y los section labels (`studio.`, `services.`, etc.) van en minúscula con punto final. Copy de cuerpo: capitalización normal del idioma.
- **Inglés como default**, español permitido en bloques que ganen claridad o calidez (mensajes operativos, banners, formularios). Nunca mezclar dentro de la misma frase.
- **Cero exclamaciones** salvo casos quirúrgicos. La voz es confiada, no entusiasta.
- **Sin emojis** en copy público (mismo principio del repo).

## 6 — Patrones de marca recurrentes

### Two-tone tagline (bright + fade)

Frase corta brillante (`fg`) + sub-frase muted (`muted`).

```
[bright] Design and code for brands in motion.
[fade]   A two-person studio for clubs, gyms and communities that move — running, yoga, padel, outdoor.
```

### "One X, two Y" — frase de equipo

Construcción favorita para hablar del estudio sin separar al equipo:

- "One signal. Two operators."
- "One frequency. Two operators."
- "One studio. Engineering meets creative direction."

### Section labels lowercase + period

- `studio.`
- `services.`
- `approach.`
- `contact.`

### Eyebrows con `+`

`+ what we do`, `+ the team`, `+ how we work`.

### CTAs cortos en mayúsculas

`BOOK A CALL` · `GET STARTED` · `LET'S TALK` · `START A PROJECT`.

## 7 — Inventario actual de copy (mantener sincronizado con `src/config.ts`)

### Brand

- **Tagline:** "Design and code for brands in motion."
- **Description:** "One signal, two operators. Design and code for the clubs, gyms and communities that move."

### Hero CTA

- "Book a call" (pill blanco grande, all-caps).

### Hero services list

- Branding & creative direction
- Web design & development
- Mobile apps · Flutter
- Cadence — our SaaS

### Sections

| Sección | Label / Eyebrow | Title |
|---|---|---|
| Hero | (wordmark) | `pulsar` + `studio` |
| Intro | — | "We're Pulsar." (bright) + tagline (fade) |
| Services | `+ what we ship` · `services.` | "services. (5)" + sub: "5 ways in. One platform — Cadence ties it together." |
| Cadence | `+ our SaaS` | "cadence." |
| Team | `+ the team` | "two of us. one signal — engineering and creative direction tuned to the same frequency." |

### Services — outcome-led titles (problem → solution)

Los servicios están en lenguaje del cliente ("Stand out in a crowded floor.") en lugar de jerga ("Branding & creative direction"). La jerga vive en el lead y en las pills de categorías, no en el título. Cada servicio es un add-on que **se integra a Cadence** — narrativamente la idea es "5 piezas, 1 plataforma".

| # | Outcome title | Plain meaning |
|---|---|---|
| 001 | Stand out in a crowded floor. | Branding & creative direction |
| 002 | A site that runs while you train. | Web design & development |
| 003 | Your community in their pocket. | Mobile apps |
| 004 | Visuals that match your energy. | AI photo / event identity / video |
| 005 | Sell to your community. | Shopify setup |

Contacto vive en el **footer** (no como sección propia). El footer mantiene el ancla `#contact` para que el nav siga funcionando.

Approach (process steps) está retirado de v1 a petición del usuario. Si vuelve, el patrón es 4-step grid con steps `01..04`.

### Footer columns

`Navigation` · `Social`. Bottom mark: `pulsar` + `studio`.

---

## 8 — Cuándo este documento debe actualizarse

- Cuando se introduce una palabra/frase nueva que va a aparecer 2+ veces → añadirla al léxico.
- Cuando se decide retirar una palabra (ej. dejar de decir "wellness") → moverla a la tabla de **a evitar**.
- Cuando un patrón de copy (eyebrow, two-tone, CTA shape) se promueve a recurrente → añadirlo a §6.

> Si una request o iteración futura mete copy que rompe estas reglas → rechazar o pedir confirmación explícita, igual que con la regla de no exponer "Inercia".

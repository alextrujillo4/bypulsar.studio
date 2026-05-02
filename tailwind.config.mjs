import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        fg: "#F5F5F5",
        muted: "#7A7A7A",
        line: "#1F1F1F",
        card: "#141414",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Sans'", "Inter", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        "fade-up": "fade-up 0.8s ease-out both",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [typography],
};

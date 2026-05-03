import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://bypulsar.studio",
  output: "server",
  adapter: node({ mode: "middleware" }),
  integrations: [tailwind({ applyBaseStyles: false }), icon()],
});

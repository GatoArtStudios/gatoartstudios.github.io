import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  alias: {
    '@components': './src/components',
    '@layouts': './src/layouts',
    '@utils': './src/lib/utils',
    '@styles': './src/styles',
    "@ui": "./src/components/ui",
    "@lib": "./src/lib",
    "@hooks": "./src/hooks"
  },
});
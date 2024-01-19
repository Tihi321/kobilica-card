import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import postcssNested from 'postcss-nested';
import postcss from 'postcss';

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap()],
  outDir: './dist',
  site: 'https://www.kobilica.hr',
  vite: {
    plugins: [
      postcss({
        plugins: [
          postcssNested(),
          // other PostCSS plugins...
        ],
      }),
    ],
  },
});

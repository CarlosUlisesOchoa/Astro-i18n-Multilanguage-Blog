import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import rehypeExternalLinks from 'rehype-external-links'
import { defaultLocale, locales } from './src/i18n/i18n'
import { site } from './src/consts'
const sitemapLocales = Object.fromEntries(locales.map((_, i) => [locales[i], locales[i]])) // Create an object with keys and values based on locales

import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: site,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => page.secret !== true,
      i18n: {
        defaultLocale: defaultLocale,
        locales: sitemapLocales,
      },
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noreferrer'],
        },
      ],
    ],
  },
})

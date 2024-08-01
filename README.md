# Astro 4.12 + i18n

### This example includes ES | EN languages (Spanish and English)

### Home page (English)

![image](https://github.com/user-attachments/assets/80725a88-c477-4fe7-9ffe-ae1391d94911)

### Blog (English)

![image](https://github.com/user-attachments/assets/9d44d420-4526-468b-811d-3d22d2e1f3df)

### Blog (Spanish)

![image](https://github.com/user-attachments/assets/53710025-8a4f-4f2d-9160-58484681225a)

### First post (English)

![image](https://github.com/user-attachments/assets/60657acf-0dba-4d0f-8d3b-82fcc7fdbab9)

### First post (Spanish)

![image](https://github.com/user-attachments/assets/235e15d7-ab62-4c95-8286-384d75af8fbf)

## Features

- ⛓️ Linked translations via a reference property: no need for matching slugs between locales.
- 🏖️ Allow adding pages for a new locale with minimal effort; use the default locale\* as a fallback for missing settings and strings.
- 🏷️ Content tags á la WordPress
- 🗺️ Sitemap support with translation links
- 📡 Localized RSS Feeds
- 🌍 Customizable URL structure, like `domain.tld/locale/directory/slug`
- 🪽 Skip to content link for screen reader and keyboard users
- 👩‍💼 Localized author profiles from a single data file
- 🔏 Secret/draft state to exclude posts from rendering
- 🔚 404 Page not found page
- 🐭 Ultra minimal styling without CSS classes with [new.css](https://newcss.net/) (remove only two lines of code to remove it!)
- 🔗 `target="_blank"` for external links with [Rehype plugin](https://github.com/rehypejs/rehype-external-links)
- 😉 Separate favicon for dev server to not get confused between dev and production
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Markdown & MDX support

## 🚀 Project Structure

You'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── i18n/
│   │   ├── i18n.ts ← Set up locales here
│   │   ├── uiStrings.js ← Localized headings, labels, etc.
│   │   └── utilities ← i18n-specific functions
│   ├── layouts/
│   ├── styles/
│   ├── utilities/
│   ├── consts.ts ← Settings loaded by astro.config.mjs
│   ├── env.d.ts
│   └── header.ts ← Settings for header menus, optionally per locale
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains collections of related markdown and MDX documents. A 'blog' collection has been defined already.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All default commands can be run from the root of the project, from a terminal:

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |

## ✅ TODO

You can check TODO-List at [TODO.md](./.github/TODO.md)

## Acknowledgements

- Special thanks to [@kslstn](https://github.com/kslstn) for the [astro-i18n-blog-starter](https://github.com/kslstn/astro-i18n-blog-starter), which served as a base for this version.

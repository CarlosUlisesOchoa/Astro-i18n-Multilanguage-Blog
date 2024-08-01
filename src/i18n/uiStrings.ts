import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteDescription: {
    es: 'Todo lo básico para un blog completamente nuevo.',
    en: 'All the basics for a brand-new blog.',
  },
  skipLink: {
    es: 'Saltar al contenido',
    en: 'Skip to content',
  },
  pageTranslationsAvailableIn: {
    es: 'Esta página también está disponible en',
    en: 'This page is also available in',
  },
  es: {
    es: 'Español',
    en: 'Spanish',
  },
  en: {
    es: 'Inglés',
    en: 'English',
  },
  tagHeadingSingular: {
    es: 'Etiqueta',
    en: 'Tag',
  },
  tagHeadingPlural: {
    es: 'Etiquetas',
    en: 'Tags',
  },
  postsPerTagPageDescription: {
    es: 'Publicaciones sobre',
    en: 'Posts about',
  },
  postLastUpdatedOn: {
    es: 'Última actualización el',
    en: 'Last updated on',
  },
  pageNotFoundHeading: {
    es: 'Página no encontrada',
    en: 'Page not found',
  },
  pageNotFoundBody: {
    es: '404!',
    en: '404!',
  },
}

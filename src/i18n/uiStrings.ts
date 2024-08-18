import type { Locale } from './i18n'

interface TypeUIStrings {
  [key: string]: {
    [locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
  }
}

export const uiStrings: TypeUIStrings = {
  siteLogoLabel: {
    es: 'Logo del blog',
    en: "Blog's logo",
  },
  siteDescription: {
    es: 'Todo lo básico para un blog completamente nuevo.',
    en: 'All the basics for a brand-new blog.',
  },
  headerToggleMenu: {
    en: 'Toggle Menu',
    es: 'Alternar menú',
  },
  headerMainNavigation: {
    en: 'Main navigation',
    es: 'Navegación principal',
  },
  toggleThemeLabel: {
    en: 'Toggle theme',
    es: 'Alternar tema',
  },
  languageSwitcherLanguageSelection: {
    en: 'Language selection',
    es: 'Selección de idioma',
  },
  languageSwitcher: {
    es: 'Idioma',
    en: 'Language',
  },
  languageSwitcherSelection: {
    es: 'Seleccionar idioma',
    en: 'Language selection',
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
  postPreviewImageAlt: {
    es: 'Imagen de la publicación',
    en: 'Post preview image',
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

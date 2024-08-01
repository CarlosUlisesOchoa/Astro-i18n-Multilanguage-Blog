export type Locale = 'es' | 'en' | string

interface Fallback {
  [key: string]: string
}
type PathNames = {
  [key: string]: {
    [locale in Locale]: string
  }
}

export const defaultLocale: string = 'es'
export const locales = ['es', 'en']
export const fallback: Fallback = {
  en: 'es',
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
  blog: {
    es: 'blog',
    en: 'blog',
  },
}
export const directoryNames: PathNames = {
  // Define the path for the tag pages (tags list, posts per tag).
  tags: {
    es: 'etiqueta',
    en: 'tag',
  },
  // Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
  people: {
    en: 'about',
    es: 'acerca-de',
  },
}

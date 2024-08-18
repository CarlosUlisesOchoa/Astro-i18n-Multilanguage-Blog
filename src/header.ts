export type navigationItem = Readonly<{
  path: string
  label: string
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
  es: {
    items: [
      {
        path: '/',
        label: 'Inicio',
      },
      {
        path: '/blog',
        label: 'Blog',
      },
      {
        path: '/etiquetas',
        label: 'Etiquetas',
      },
      {
        path: '/acerca',
        label: 'Acerca',
      },
    ],
  },
  en: {
    items: [
      {
        path: '/en/',
        label: 'Home',
      },
      {
        path: '/en/blog',
        label: 'Blog',
      },
      {
        path: '/en/tags',
        label: 'Tags',
      },
      {
        path: '/en/about',
        label: 'About',
      },
    ],
  },
}

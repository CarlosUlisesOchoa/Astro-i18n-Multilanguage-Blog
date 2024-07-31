export type Locale = "en" | "de" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "en"
export const locales = ["en", "de"]
export const fallback: Fallback = {
	de: "en",
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		de: 'blog',
	},
}
export const directoryNames: PathNames = {
	// Define the path for the tag pages (tags list, posts per tag).
	tags: {
		en: 'tag',
		de: 'thema',
	},
	// Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
	people: {
		en: 'about',
		de: 'ueber',
	}
}
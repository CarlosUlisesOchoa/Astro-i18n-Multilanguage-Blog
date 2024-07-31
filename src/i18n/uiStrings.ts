import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale] : string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	siteDescription: {
		en: 'All the basics for a brand-new blog.',
		de: 'Die Basics für eine niegelnagelneues Blog',
	},
	skipLink: {
		en: 'Skip to content',
		de: 'Zum Inhalt springen',
	},
	pageTranslationsAvailableIn: {
		en: 'This page is also available in',
		de: 'Diese Seite gibt es auch auf',
	},
	en: {
		en: 'English',
		de: 'englisch',
	},
	de: {
		en: 'German',
		de: 'deutsch',
	},
	tagHeadingSingular: {
		en: 'Tag',
		de: 'Thema',
	},
	tagHeadingPlural: {
		en: 'Tags',
		de: 'Themen',
	},
	postsPerTagPageDescription: {
		en: "Posts about",
		de: 'Posts zum Thema',
	},
	personProfilePageDescription: {
		en: "Profile of",
		de: 'Profil von',
	},
	pageNotFoundHeading: {
		en: 'Page not found',
		de: 'Seite nicht gefunden',
	},
	pageNotFoundBody: {
		en: '404!',
		de: '404!',
	},
};

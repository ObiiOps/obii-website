export const SITE_NAME = 'OBII';
export const SITE_URL = 'https://obii.ai';
export const SITE_LOCALE = 'en_AU';
export const THEME_COLOR = '#0a132a';
export const DEFAULT_TITLE = 'OBII | Expert investment intelligence for ASX investors';
export const DEFAULT_DESCRIPTION =
	'Research what real market experts said about the ASX shares you follow. Search ausbiz interviews, explore the reasoning and check the original source.';
export const DEFAULT_OG_IMAGE = { path: '/og-image.png', width: 1200, height: 630, alt: 'OBII: expert investment intelligence' };

export type JsonLd = Record<string, unknown>;

export interface FaqEntry {
	question: string;
	answer: string;
}

export interface Breadcrumb {
	name: string;
	path: string;
}

export function absoluteUrl(path: string, base: string | URL = SITE_URL): string {
	return new URL(path, base).href;
}

export function organizationSchema(base: string | URL = SITE_URL): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		'@id': absoluteUrl('/#organization', base),
		name: SITE_NAME,
		url: absoluteUrl('/', base),
		logo: absoluteUrl('/icon-512.png', base),
	};
}

export function websiteSchema(base: string | URL = SITE_URL): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': absoluteUrl('/#website', base),
		name: SITE_NAME,
		url: absoluteUrl('/', base),
		inLanguage: 'en-AU',
		publisher: { '@id': absoluteUrl('/#organization', base) },
	};
}

export function breadcrumbSchema(crumbs: readonly Breadcrumb[], base: string | URL = SITE_URL): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: crumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: absoluteUrl(crumb.path, base),
		})),
	};
}

export function faqSchema(entries: readonly FaqEntry[]): JsonLd {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: entries.map((entry) => ({
			'@type': 'Question',
			name: entry.question,
			acceptedAnswer: { '@type': 'Answer', text: entry.answer },
		})),
	};
}

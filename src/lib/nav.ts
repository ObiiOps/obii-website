export interface NavLink {
	label: string;
	href: string;
}

export const NAV_LINKS: readonly NavLink[] = [
	{ label: 'How it works', href: '/how-it-works/' },
	{ label: 'Experts', href: '/experts/' },
	{ label: 'Companies', href: '/companies/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'FAQs', href: '/faqs/' },
];

/** Strips a trailing slash so `/pricing/` and `/pricing` compare equal. */
export function normalisePath(path: string): string {
	return path.replace(/\/$/, '') || '/';
}

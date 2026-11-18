// @ts-check
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

const SITE_URL = 'https://obii.ai';
const UNLISTED_PATHS = ['/version1/', '/version2/', '/contact/thanks/'];

// https://astro.build/config
export default defineConfig({
	site: SITE_URL,
	trailingSlash: 'always',
	integrations: [
		sitemap({
			filter: (page) => !UNLISTED_PATHS.some((path) => page.endsWith(path)),
		}),
	],
});

/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly PUBLIC_APP_ROOT_URL?: string;
	readonly PUBLIC_POSTHOG_PROJECT_TOKEN?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
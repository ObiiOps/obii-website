/**
 * Google Tag Manager container ID. Google Analytics and any other tags are
 * managed inside this container. Leave empty to switch tracking off.
 */
export const GTM_CONTAINER_ID = 'GTM-MJWMM9VG';

/**
 * Google Search Console verification code: the `content` value of the
 * `google-site-verification` meta tag. Leave empty to omit the tag.
 */
export const GSC_VERIFICATION_CODE = '';

/** Tracking only runs on these hostnames, so previews and local builds are not counted. */
export const TRACKED_HOSTNAMES: readonly string[] = ['obii.ai', 'www.obii.ai'];

/**
 * PostHog project shared with the legacy ausbiz+ marketing site and investors app.
 * Set `PUBLIC_POSTHOG_HOST` to {@link POSTHOG_API_HOST} and `PUBLIC_POSTHOG_PROJECT_TOKEN`
 * in Netlify or local `.env` (client token — not committed).
 */
export const POSTHOG_PROJECT_ID = 284978;

/** EU Cloud ingest host for {@link POSTHOG_PROJECT_ID}. */
export const POSTHOG_API_HOST = 'https://eu.i.posthog.com';
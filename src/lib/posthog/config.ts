import { APP_WEB_ORIGIN } from '../app';

export const BRAND_SUPER_PROPERTY = 'brand';
export const BRAND_VALUE = 'brand_obii';

export const POSTHOG_SITE_SUPER_PROPERTY = 'site';
export const POSTHOG_SITE_VALUE_MARKETING = 'marketing-site';

export const MARKETING_SITE_SUPER_PROPERTIES = {
	[POSTHOG_SITE_SUPER_PROPERTY]: POSTHOG_SITE_VALUE_MARKETING,
	[BRAND_SUPER_PROPERTY]: BRAND_VALUE,
} as const;

export const POSTHOG_CROSS_DOMAIN_QUERY_KEYS = {
	distinctId: 'ph_distinct_id',
	sessionId: 'ph_session_id',
} as const;

export const UTM_QUERY_PARAM_KEYS = [
	'utm_source',
	'utm_medium',
	'utm_campaign',
	'utm_term',
	'utm_content',
] as const;

export const REFERRAL_QUERY_PARAM_KEYS = ['ref', 'referral', 'referrer', 'partner', 'invite', 'r'] as const;

export const MARKETING_UTMS_SESSION_STORAGE_KEY = 'marketing_utms';

/** Query param appended by the legacy ausbiz+ 301 redirect (see for-local/analytics.md). */
export const LEGACY_FROM_BRAND_QUERY_PARAM = 'from_brand';
export const LEGACY_BRAND_AUSBIZPLUS = 'brand_ausbizplus';

export { APP_WEB_ORIGIN };
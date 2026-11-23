/**
 * Google Tag Manager container ID. Google Analytics and any other tags are
 * managed inside this container. Leave empty to switch tracking off.
 */
export const GTM_CONTAINER_ID = 'GTM-MJWMM9VG';

const OBII_META_PIXEL_ID = '2575023732979543';
/** The ausbiz ad account runs ads that link to this site, so its pixel measures them too. */
const AUSBIZ_META_PIXEL_ID = '1375195872807551';

/**
 * Meta (Facebook and Instagram) pixel IDs. Every pixel receives the same events.
 * Leave the list empty to switch the pixels off.
 */
export const META_PIXEL_IDS: readonly string[] = [OBII_META_PIXEL_ID, AUSBIZ_META_PIXEL_ID];

/**
 * Google Search Console verification code: the `content` value of the
 * `google-site-verification` meta tag. Leave empty to omit the tag.
 */
export const GSC_VERIFICATION_CODE = '';

/** Tracking only runs on these hostnames, so previews and local builds are not counted. */
export const TRACKED_HOSTNAMES: readonly string[] = ['obii.ai', 'www.obii.ai'];
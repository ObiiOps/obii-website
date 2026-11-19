function normalizeRoot(url: string | undefined): string {
	return (url ?? '').replace(/\/$/, '');
}

export const APP_WEB_ORIGIN = normalizeRoot(import.meta.env.PUBLIC_APP_ROOT_URL);

const appRoot = APP_WEB_ORIGIN;

function appPath(path: string): string {
	const segment = path.startsWith('/') ? path : `/${path}`;
	return appRoot ? `${appRoot}${segment}` : segment;
}

export const appLoginUrl = appPath('/login');
export const appRegisterUrl = appPath('/register');
export const appTermsUrl = appPath('/terms-of-service');
export const appPrivacyUrl = appPath('/privacy-policy');

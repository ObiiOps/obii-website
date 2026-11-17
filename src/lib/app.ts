function normalizeRoot(url: string | undefined): string {
	return (url ?? '').replace(/\/$/, '');
}

const appRoot = normalizeRoot(import.meta.env.PUBLIC_APP_ROOT_URL);

function appPath(path: string): string {
	const segment = path.startsWith('/') ? path : `/${path}`;
	return appRoot ? `${appRoot}${segment}` : segment;
}

export const appLoginUrl = appPath('/login');
export const appRegisterUrl = appPath('/register');
export const appTermsUrl = appPath('/terms-of-service');
export const appPrivacyUrl = appPath('/privacy-policy');

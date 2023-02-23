import { createClient } from 'microcms-js-sdk';
import { VITE_API_DOMAIN, VITE_API_KEY } from '$env/static/private';

export const getClient = (customFetch: typeof fetch) =>
	createClient({
		serviceDomain: VITE_API_DOMAIN,
		apiKey: VITE_API_KEY,
		customFetch
	});

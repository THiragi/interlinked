import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess({
		scss: {
			prependData: `@import 'src/routes/variables.scss';`
		}
	}),
	kit: {
		adapter: adapter()
	}
};

export default config;

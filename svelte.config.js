import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({strict: false}),
    paths: {
      // deploying to https://coreylang.github.com/thestatus.dev-svelte/
      base: '/thestatus.dev-svelte'
    },
    // prerender: {
    //   entries: [
    //     '/',
    //     '/auth/login',
    //     '/auth/signup'
    //   ]
    // }
  },
  preprocess: vitePreprocess()
};

export default config;

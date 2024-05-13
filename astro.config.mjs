import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// https://docs.astro.build/en/guides/deploy/github/
export default defineConfig({
	site: 'https://rresino.github.io',
	// base: 'personal-blog',
	integrations: [mdx(), sitemap()],
});

import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import decap from 'astro-netlify-cms'
import config from './decap-cms'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), decap({ config })],
});

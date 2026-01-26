import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.example',
  integrations: [],
  vite: {
    server: {
      fs: {
        allow: ['.']
      }
    }
  }
});

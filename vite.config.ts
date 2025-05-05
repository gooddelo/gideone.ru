import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import * as path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        // @use "@/styles/variables.scss" as *;
        @use "@/styles/mixins.scss" as *;
        @use "@/styles/typography.scss" as *;
        // @use "@/styles/breakpoints.scss" as *;
      `,
      },
    },
  },
  server: {
    allowedHosts: ['gideone.ru', 'localhost', '0.0.0.0'],
  },
  preview: {
    allowedHosts: ['gideone.ru', 'localhost', '0.0.0.0'],
  },
});

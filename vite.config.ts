import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

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
        @use "@/styles/keyframes.scss" as *;
       // @use "@/styles/functions.scss" as *;
        @use "@/styles/mixins.scss" as *;
        @use "@/styles/typography.scss" as *;
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

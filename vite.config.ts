import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const cacheLife = 60 * 60 * 24 * 30; // 30 Days

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff2,ttf,json}'],
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.destination === 'image',
            handler: 'StaleWhileRevalidate',
            // handler: 'CacheFirst',
            options: {
              cacheName: 'images-cache',
              expiration: {
                maxAgeSeconds: cacheLife,
              },
            },
          },
          {
            urlPattern: ({ request }) => request.destination === 'document',
            handler: 'NetworkFirst',
            // handler: 'NetworkFirst',
            options: {
              cacheName: 'html-cache',
              expiration: {
                maxAgeSeconds: cacheLife,
              },
            },
          },
          {
            urlPattern: ({ request }) =>
              request.destination === 'style' || request.destination === 'script',
            handler: 'NetworkFirst',
            // handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'static-resources',
              expiration: {
                maxAgeSeconds: cacheLife,
              },
            },
          },
        ],
      },
      includeAssets: ['locales/**/*', 'animations/**/*', 'img/**/*', 'svg/**/*', 'gideone.svg'], // include icons and other assets
      manifest: false, // <- disables installability
      devOptions: {
        enabled: true, // enables service worker in dev mode (optional)
      },
    }),
  ],
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

import type { NextConfig } from 'next';
// import { nextI18NextConfig } from './next-i18next.config';

const nextConfig: NextConfig = {
  /* other config options */
  // i18n: nextI18NextConfig.i18n,
  sassOptions: {
    includePaths: ['styles'],
    // prependData: '@use "sass:math" as *;'
    additionalData: `@use "sass:math" as *;`,
  },
};

export default nextConfig;

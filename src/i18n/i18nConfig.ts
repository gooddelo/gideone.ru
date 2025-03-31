const i18nConfig = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
} as const;

export enum Locales {
  EN = 'en',
  RU = 'ru',
}

export const i18nNamespaces = ['header', 'banner'] as const;

export default i18nConfig;

const i18nConfig = {
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
} as const;

export enum Locales {
  EN = 'en',
  RU = 'ru',
}

export interface I18nConfig {
  locale: Locales;
}

export const i18nNamespaces = ['header', 'banner', 'consultation', 'faq'] as const;
export type i18nNamespacesType = (typeof i18nNamespaces)[number];

export default i18nConfig;

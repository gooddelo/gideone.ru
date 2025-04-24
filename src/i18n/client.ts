'use client';

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import i18nConfig, { i18nNamespaces } from './i18nConfig';

i18next
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: i18nConfig.defaultLocale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    ns: i18nNamespaces,
    // defaultNS: 'common',
    interpolation: { escapeValue: false },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18next;

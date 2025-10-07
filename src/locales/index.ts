import i18n from 'i18next';
import HttpBackend, { type HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
// import { getDefLang } from '@/utils';
import { LANGUAGES } from '@/types';
import { i18nNamespaces } from './namespaces';

const getDefLang = (): string => {
  const path = window.location.pathname;
  if (path.startsWith('/en')) return LANGUAGES.en_us;
  return LANGUAGES.ru; // дефолт
};

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    // debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to load JSON files dynamically
    },
    lng: getDefLang(),
    // lng: defLang,
    fallbackLng: LANGUAGES.ru,
    ns: i18nNamespaces, // Namespaces to load
    // defaultNS: 'auth_pages', // Default namespace
    interpolation: { escapeValue: false },
  });

export default i18n;

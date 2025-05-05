import i18n from 'i18next';
import HttpBackend, { type HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import { LANGUAGES } from '@/types';
import { i18nNamespaces } from './namespaces';
// import { secureStorage } from '@/utils/secureStorage'
// import { TInitialState } from '@/redux/user'

// const {getLocalItem} = secureStorage()
// const user = getLocalItem<TInitialState>(LOCAL_STORAGE_KEYS.user)

const defLang = LANGUAGES.ru;

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    // debug: true,
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to load JSON files dynamically
    },
    lng: defLang,
    fallbackLng: LANGUAGES.ru,
    ns: i18nNamespaces, // Namespaces to load
    // defaultNS: 'auth_pages', // Default namespace
    interpolation: { escapeValue: false },
  });

export default i18n;

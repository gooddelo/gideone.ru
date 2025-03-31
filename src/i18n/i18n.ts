import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig, { Locales } from '@/i18n/i18nConfig';

export default async function initTranslations(
  locale: Locales,
  namespaces: string[],
  i18nInstance?: i18n,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resources?: Record<string, any>
) {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);

  // let locale: string = i18nConfig.defaultLocale;

  // if (typeof window !== 'undefined') {
  //   // Get language from the URL path (only run this in the browser)
  //   const pathname = window.location.pathname;
  //   const match = pathname.match(/^\/([a-zA-Z]{2})/); // Match first two-letter language code, e.g., "ru" or "en"
  //   locale = match ? match[1] : i18nConfig.defaultLocale;
  // }

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.json`)
      )
    );
  }

  // if (typeof window !== 'undefined') {
  //   window.addEventListener('popstate', () => {
  //     const pathname = window.location.pathname;
  //     const match = pathname.match(/^\/([a-zA-Z]{2})/);
  //     const newLocale = match ? match[1] : i18nConfig.defaultLocale;

  //     if (newLocale !== locale) {
  //       i18nInstance.changeLanguage(newLocale);
  //     }
  //   });
  // }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales,
  });

  return {
    i18n: i18nInstance,
    resources: { [locale]: i18nInstance.services.resourceStore.data[locale] },
    t: i18nInstance.t,
  };
}

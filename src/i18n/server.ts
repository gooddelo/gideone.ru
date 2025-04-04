import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig, { Locales, i18nNamespacesType } from '@/i18n/i18nConfig';

export default async function getServerTranslation(
  locale: Locales,
  namespaces: i18nNamespacesType | i18nNamespacesType[],
  i18nInstance?: i18n
  // resources?: Record<string, any>
) {
  i18nInstance = i18nInstance || createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng: locale,
      fallbackLng: i18nConfig.defaultLocale,
      supportedLngs: i18nConfig.locales,
      ns: Array.isArray(namespaces) ? namespaces : [namespaces],
      defaultNS: Array.isArray(namespaces) ? namespaces[0] : namespaces,
      interpolation: {
        escapeValue: false, // not needed for react
      },
      returnObjects: true, // Enable this globally if needed
    });

  return {
    t: i18nInstance.t.bind(i18nInstance),
    i18n: i18nInstance,
  };
}

import { createInstance, i18n } from 'i18next';
import { initReactI18next } from 'react-i18next/initReactI18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import i18nConfig, { Locales, i18nNamespacesType } from '@/i18n/i18nConfig';

export default async function getServerTranslation(
  locale: Locales,
  namespaces: i18nNamespacesType,
  i18nInstance?: i18n,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resources?: Record<string, any>
) {
  i18nInstance = i18nInstance || createInstance();
  i18nInstance.use(initReactI18next);
  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: i18nNamespacesType) =>
          import(`../../public/locales/${language}/${namespace}.json`)
      )
    );
  }

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

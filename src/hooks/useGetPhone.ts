// import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { secureStorage } from '@/utils';
import { type IGeolocation, LANGUAGES, LOCAL_STORAGE_KEYS, type Namespaces } from '@/types';

interface IPhone {
  display: string;
  href: string;
}

export const useGetPhone = () => {
  const { t } = useTranslation<Namespaces>('common');
  const { getLocalItem } = secureStorage();
  const location = getLocalItem<IGeolocation>(LOCAL_STORAGE_KEYS.user_location);
  let phone: IPhone = {
    display: t('phone_tel'),
    href: t('phone_href'),
  };

  if (location?.address.country_code === 'ru' || navigator.language.startsWith(LANGUAGES.ru))
    phone = {
      display: t('phone'),
      href: t('phone_href'),
    };
  else
    phone = {
      display: t('phone_en'),
      href: t('phone_en_href'),
    };

  return phone;
};

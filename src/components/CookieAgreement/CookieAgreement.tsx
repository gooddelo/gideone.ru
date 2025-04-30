'use client';

import { LOCAL_STORAGE_KEYS } from '@/types';
import { secureStorage } from '@/utils';
import Link from 'next/link';
import { FC, useLayoutEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './CookieAgreement.module.scss';
import '@/i18n/client'; // Import the i18n client to ensure translations are available

const CookieAgreement: FC = () => {
  // const [locale, setLocale] = useState('ru');
  const { t } = useTranslation('cookieAgreement');
  const { getLocalItem, setLocalItem } = secureStorage();
  const [agreed, setAgreed] = useState<boolean>(true);

  const handleAgreement = () => {
    setLocalItem(LOCAL_STORAGE_KEYS.cookie_agreement, true);
    setAgreed(true);
  };

  useLayoutEffect(() => {
    const cookieAgreement = getLocalItem(LOCAL_STORAGE_KEYS.cookie_agreement);
    if (cookieAgreement) return setAgreed(true);
    else return setAgreed(false);
  }, []);

  if (agreed === false)
    return (
      <div className={styles.agreement}>
        <p className={styles.text}>
          <Trans
            i18nKey='paragraph'
            t={t}
            components={{
              policy: <Link href={t('policy_link')} target='__blank' className={styles.link} />,
            }}
          />
        </p>
        <button onClick={handleAgreement} className={styles.btn}>
          {t('button')}
        </button>
      </div>
    );

  return null;
};

CookieAgreement.displayName = 'Cookie agreement';

export default CookieAgreement;

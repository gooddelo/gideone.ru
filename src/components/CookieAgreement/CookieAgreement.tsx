'use client';

import { LOCAL_STORAGE_KEYS } from '@/types';
import { secureStorage } from '@/utils';
import Link from 'next/link';
import { FC, useLayoutEffect, useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import styles from './CookieAgreement.module.scss';

const CookieAgreement: FC = () => {
  const { t } = useTranslation('cookieAgreement');
  const { getLocalItem, setLocalItem } = secureStorage();
  const [agreed, setAgreed] = useState(false);

  const handleAgreement = () => {
    setLocalItem(LOCAL_STORAGE_KEYS.cookie_agreement, true);
    setAgreed(true);
  };

  useLayoutEffect(() => {
    const cookieAgreement = getLocalItem(LOCAL_STORAGE_KEYS.cookie_agreement);
    console.log('agreement:  ' + cookieAgreement);
    if (cookieAgreement) return setAgreed(true);
  }, [getLocalItem]);

  if (agreed) return null;

  return (
    <div className={styles.agreement}>
      <p className={styles.text}>
        <Trans
          i18nKey='paragraph'
          t={t}
          components={{
            policy: <Link href={t('policy_link')} className={styles.link} />,
          }}
        />
      </p>
      <button onClick={handleAgreement} className={styles.btn}>
        {t('button')}
      </button>
    </div>
  );
};

export default CookieAgreement;

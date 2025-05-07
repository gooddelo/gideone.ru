import { type FC, useLayoutEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { secureStorage } from '@/utils';
import { LOCAL_STORAGE_KEYS } from '@/types';
import type { Namespaces } from '@/types';
import styles from './CookieAgreement.module.scss';

const CookieAgreement: FC = () => {
  const [locale, setLocale] = useState('ru');
  const { t } = useTranslation<Namespaces>('cookieAgreement', { lng: locale });
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

  useLayoutEffect(() => {
    if (!window) return;

    const pathLocale = window.location.pathname.split('/')[1];
    setLocale(pathLocale);
  }, []);

  if (agreed === false)
    return (
      <div className={styles.agreement}>
        <p className={styles.text}>
          <Trans
            i18nKey="paragraph"
            t={t}
            components={{
              policy: <a href={t('policy_link')} target="__blank" className={styles.link} />,
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

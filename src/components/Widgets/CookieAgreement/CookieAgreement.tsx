import { type FC, useLayoutEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { secureStorage } from '@/utils';
import { LOCAL_STORAGE_KEYS } from '@/types';
import type { Namespaces } from '@/types';
import { Markdown } from '../Markdown/Markdown';
import styles from './CookieAgreement.module.scss';

const CookieAgreement: FC = () => {
  const { t } = useTranslation<Namespaces>('cookieAgreement');
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
          {/* <Markdown> */}
          <Trans
            i18nKey="paragraph"
            t={t}
            components={{
              policy: (
                <a
                  href={t('links.privacy_policy', { ns: 'common' })}
                  target="__blank"
                  className={styles.link}
                />
              ),
            }}
          />
          {/* </Markdown> */}
        </p>
        <button onClick={handleAgreement} className={styles.btn}>
          <Markdown>{t('button')}</Markdown>
        </button>
      </div>
    );

  return null;
};

CookieAgreement.displayName = 'Cookie agreement';

export default CookieAgreement;

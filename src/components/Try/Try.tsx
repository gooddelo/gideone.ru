import { getServerTranslation, I18nConfig } from '@/i18n';
import React, { FC } from 'react';
import styles from './Try.module.scss';
import Image from 'next/image';

interface IReason {
  reason: string;
}

const Try: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['try', 'common']);
  const reasons = t('reasons', { returnObjects: true }) as Array<IReason>;
  return (
    <section className={styles.container} id={t('nav_blocks.try', { ns: 'common' })}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {t('title')} <span className={styles.title__inner}>{t('title_2')}</span>
        </h3>
        <ul className={styles.reasons}>
          {reasons.map((reason, i) => (
            <li key={reason.reason + i} className={styles.reason}>
              <Image src={'/svg/check.svg'} alt='check' width={40} height={40} />
              {reason.reason}
            </li>
          ))}
        </ul>
        <button className={styles.action}>{t('action')}</button>
      </div>
      <Image className={styles.img} src={t('img')} width={919} height={710} alt='try' />
    </section>
  );
};

export default Try;

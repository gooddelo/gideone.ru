import { initTranslations } from '@/i18n';
import styles from './Banner.module.scss';
import { FC } from 'react';
import { Locales } from '@/i18n/i18nConfig';
import Image from 'next/image';

const Banner: FC = async () => {
  const { t } = await initTranslations(Locales.RU, ['banner']);
  return (
    <section className={styles.banner}>
      <Image
        src='/img/gideone_logo_lg.png'
        alt='banner'
        className={styles.logo}
        width={1604.79}
        height={787.14}
        // sizes='100vw'
      />
      <div className={styles.main}>
        <h1 className={styles.name}>{t('name')}</h1>
        <h2 className={styles.description}>{t('description')}</h2>
        <p className={styles.sub_text}>{t('sub_text')}</p>
        <button className={styles.button}>{t('button')}</button>
      </div>
    </section>
  );
};

export default Banner;

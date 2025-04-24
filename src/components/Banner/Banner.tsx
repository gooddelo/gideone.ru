import { getServerTranslation } from '@/i18n';
import styles from './Banner.module.scss';
import { FC } from 'react';
import { I18nConfig } from '@/i18n';
import Image from 'next/image';
import { BannerButton } from './BannerButton';

const Banner: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['banner', 'common']);
  return (
    <section className={styles.banner} id={t('nav_blocks.banner', { ns: 'common' })}>
      <Image
        src='/img/gideone_logo_lg.png'
        alt='banner'
        className={styles.logo}
        width={1604.79}
        height={787.14}
        priority
      />
      <div className={styles.main}>
        <h1 className={styles.name}>{t('name')}</h1>
        <h2 className={styles.description}>{t('description')}</h2>
        <p className={styles.sub_text}>{t('sub_text')}</p>
        {/* <button className={styles.button} id='banner-button'>
          {t('button')}
        </button> */}
        <BannerButton locale={locale} />
      </div>
    </section>
  );
};

export default Banner;

import { getServerTranslation } from '@/i18n';
import styles from './Banner.module.scss';
import { FC } from 'react';
import { I18nConfig } from '@/i18n';
import Image from 'next/image';
import { ModalContact } from '../ModalContact';

const Banner: FC<I18nConfig> = async ({ locale }) => {
  // TODO: fix margins for adaptive
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
        <ModalContact
          locale={locale}
          className={styles.button}
          text={t('button')}
          id='banner-button'
        />
      </div>
    </section>
  );
};

Banner.displayName = 'Banner section';

export default Banner;

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContact } from '@/components/Widgets';
import styles from './Banner.module.scss';

const Banner: FC = () => {
  // TODO: fix margins for adaptive
  const { t } = useTranslation('banner');
  return (
    <section className={styles.banner} id={t('nav_blocks.banner', { ns: 'common' })}>
      <img
        src="/img/gideone_logo_lg.png"
        alt="banner"
        className={styles.logo}
        width={1604.79}
        height={787.14}
      />
      <div className={styles.main}>
        <h1 className={styles.name}>{t('name')}</h1>
        <h2 className={styles.description}>{t('description')}</h2>
        <ModalContact className={styles.button} text={t('button')} id="banner-button" />
      </div>
    </section>
  );
};

Banner.displayName = 'Banner section';

export default Banner;

import styles from './MainBanner.module.scss';
import { initTranslations } from '@/i18n';

export const MainBanner = async () => {
  const { t } = await initTranslations('ru', ['mainBanner']);


  return (
    <section className={styles.mainBanner}>
      <div className={styles.container}>
        <h2>{t('main_title')}</h2>
      </div>
    </section>
  );
};

export default MainBanner; 
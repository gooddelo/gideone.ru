import { FunctionComponent } from 'react';
import styles from './Tasks.module.scss';
import Image from 'next/image';
import { getServerTranslation, I18nConfig } from '@/i18n';

const Tasks: FunctionComponent<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['tasks']);
  return (
    <section className={styles.tasks}>
      <div className={styles.task}>
        <Image src='/img/profit.png' alt='1' width={70} height={68} />
        <span>{t('first')}</span>
      </div>
      <div className={styles.task}>
        <Image src='/img/motivation.png' alt='1' width={70} height={68} />
        <span>{t('second')}</span>
      </div>
      <div className={styles.task}>
        <Image src='/img/standards.png' alt='1' width={70} height={68} />
        <span>{t('third')}</span>
      </div>
      <div className={styles.task}>
        <Image src='/img/adaptation.png' alt='1' width={70} height={68} />
        <span>{t('fourth')}</span>
      </div>
    </section>
  );
};

export default Tasks;

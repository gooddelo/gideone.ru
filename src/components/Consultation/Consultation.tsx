import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ConsultationForm } from '@/components/Widgets';
import styles from './Consultation.module.scss';

const Consultation: FC = () => {
  const { t } = useTranslation('common');
  return (
    <section className={styles.consultation} id={t('nav_blocks.consultation', { ns: 'common' })}>
      <div className={styles.content}>
        <img
          className={styles.img}
          src={'/img/consultation.png'}
          alt={'consultation'}
          width={1070}
          height={886}
        />
        <ConsultationForm />
      </div>
    </section>
  );
};

Consultation.displayName = 'Consultation section';

export default Consultation;

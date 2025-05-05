import type { FC } from 'react';
import styles from './Consultation.module.scss';
import { ConsultationForm } from './ConsultationForm';
import { useTranslation } from 'react-i18next';

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

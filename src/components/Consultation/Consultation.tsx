import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Consultation.module.scss';
import { I18nConfig } from '@/i18n';
import ConsultationForm from './ConsultationForm';

const Consultation: FC<I18nConfig> = async () => {
  return (
    <section className={styles.consultation}>
      <Image
        className={styles.consultation__img}
        src={'/img/consultation.png'}
        alt={'consultation'}
        width={890}
        height={886}
      />
      <ConsultationForm />
    </section>
  );
};

export default Consultation;

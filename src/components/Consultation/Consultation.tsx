import React, { FC } from 'react';
import Image from 'next/image';
import styles from './Consultation.module.scss';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { ConsultationForm } from './ConsultationForm';

const Consultation: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['common']);
  return (
    <section className={styles.consultation} id={t('nav_blocks.consultation', { ns: 'common' })}>
      <div className={styles.content}>
        <Image
          className={styles.img}
          src={'/img/consultation.png'}
          alt={'consultation'}
          width={890}
          height={886}
        />
        <ConsultationForm locale={locale} />
      </div>
    </section>
  );
};

export default Consultation;

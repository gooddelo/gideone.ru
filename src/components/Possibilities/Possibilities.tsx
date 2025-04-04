import React, { FC } from 'react';
import styles from './Possibilities.module.scss';
import { getServerTranslation, I18nConfig } from '@/i18n';

interface Step {
  name: string;
}

const Possibilities: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, 'possibilities');
  const steps = t('steps', { returnObjects: true }) as Step[];
  return (
    <section className={styles.possibilities}>
      <h2 className={styles.title}>
        {t('title')}
        <span className={styles.subtitle}>{t('subtitle')}</span>
      </h2>
      <p className={styles.description}>{t('description')}</p>

      <ul className={styles.steps}>
        {steps.map((step, i) => (
          <li key={`step ${i}`} className={styles.step}>
            {step.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Possibilities;

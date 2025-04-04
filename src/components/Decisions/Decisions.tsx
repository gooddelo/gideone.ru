import { getServerTranslation, I18nConfig } from '@/i18n';
import React, { FC } from 'react';
import styles from './Decisions.module.scss';
import Image from 'next/image';

interface IDecision {
  name: string;
  description: string;
  img: string;
}

const Decisions: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['decisions']);
  const decisions = t('decisions', { returnObjects: true }) as Array<IDecision>;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.decisions}>
        {decisions.map((decision, i) => (
          <div className={styles.decision} key={decision.name + i}>
            <h4 className={styles.decision__name}>{decision.name}</h4>
            <p className={styles.decision__description}>{decision.description}</p>
            <Image
              width={564}
              height={207}
              className={styles.decision__img}
              src={decision.img}
              alt={decision.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Decisions;

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './StartUsing.module.scss';

interface IStep {
  step: string;
}

const StartUsing: FC = () => {
  const { t } = useTranslation('startUsing');
  const steps = t('steps', { returnObjects: true }) as IStep[];

  return (
    <section className={styles.container} id={t('nav_blocks.start-using', { ns: 'common' })}>
      <h2 className={styles.title}>{t('title')}</h2>

      <ul className={styles.steps}>
        {Array.isArray(steps) &&
          steps.map((step, i) => (
            <li key={'step' + Math.random() + i} className={styles.step}>
              <img
                src={`/img/step-${i + 1}.png`}
                // style={{ width: 'auto', height: '278px' }}
                width={498}
                height={278}
                alt={`step ${i + 1}`}
                className={styles.step__img}
              />
              <div className={styles.step__main}>
                <span className={styles.step__order}>{i + 1}.</span>
                <span className={styles.step__text}>{step.step}</span>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

StartUsing.displayName = 'Start using section';
export default StartUsing;

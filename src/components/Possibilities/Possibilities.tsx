import { type FC } from 'react';
import styles from './Possibilities.module.scss';
import { useTranslation } from 'react-i18next';

interface Step {
  name: string;
}

const Possibilities: FC = () => {
  const { t } = useTranslation('possibilities');
  const steps = t('steps', { returnObjects: true }) as Step[];
  return (
    <section className={styles.possibilities} id={t('nav_blocks.possibilities', { ns: 'common' })}>
      <h2 className={styles.title}>
        {t('title')}
        <span className={styles.subtitle}>{t('subtitle')}</span>
      </h2>
      <p className={styles.description}>{t('description')}</p>

      <div className={styles.main}>
        <div className={styles.main__img__container}>
          <img
            src={'/img/elipses.png'}
            width={1103}
            height={1103}
            alt={'elipses'}
            className={styles.main__img}
          />
        </div>
        <ul className={styles.main__list}>
          {Array.isArray(steps) &&
            steps.map((step, i) => (
              <li key={`step ${i}`} className={styles.main__step}>
                <img src={'/img/loader.png'} width={40} height={40} alt={'loader'} />
                <span className={styles.main__step__text}>{step.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

Possibilities.displayName = 'Possibilities section';

export default Possibilities;

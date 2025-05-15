import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Possibilities.module.scss';

interface Step {
  name: string;
}

const Possibilities: FC = () => {
  const { t } = useTranslation<Namespaces>('possibilities');
  const steps = t('steps', { returnObjects: true }) as Step[];

  const sectionId = t('nav_blocks.possibilities', { ns: 'common' });
  const titleId = `${sectionId}-title`;

  const [titleInView, setTitleInView] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  useEffect(() => {
    const title = document.getElementById(titleId);
    const stepElements = steps.map((_, i) => document.getElementById(`${sectionId}-step-${i + 1}`));
    if (!title || stepElements.some((el) => !el)) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);

        if (visible.length > 0) {
          const last = visible.length - 1;
          const idOfLast = Number(visible[last].target.id.split('-')[2]);
          if (idOfLast >= activeStepIndex) {
            // console.log(visible[last]);
            // console.log('idd => ' + visible[last].target.id);

            setActiveStepIndex(Number(visible[last].target.id.split('-')[2]));
          }
        }
      },
      { threshold: 0.75 },
    );

    stepElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      titleObserver.disconnect();
      observer.disconnect();
    };
  }, [steps, sectionId, titleId]);

  return (
    <section className={styles.possibilities} id={sectionId}>
      <h2 className={cn(styles.title, { [styles.title__active]: titleInView })} id={titleId}>
        {t('title')}
        <span className={styles.subtitle}>{t('subtitle')}</span>
      </h2>
      <p className={styles.description}>{t('description')}</p>

      <div className={styles.main}>
        <div className={styles.main__img__container}>
          <img
            src={t('image')}
            width={1103}
            height={1103}
            alt={'elipses'}
            className={styles.main__img}
            style={{
              transform: `rotate(${(activeStepIndex - 1) * 27.5}deg)`,
            }}
          />
        </div>
        <ul className={styles.main__list}>
          {Array.isArray(steps) &&
            steps.map((step, i) => (
              <li
                key={`step--${i}`}
                id={sectionId + '-step-' + (i + 1)}
                className={cn(styles.step, {
                  [styles[`step__active`]]: i + 1 === activeStepIndex,
                })}
              >
                <img src={t('loading_image')} width={40} height={40} alt={'loader'} />
                <span className={styles.step__text}>{step.name}</span>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

Possibilities.displayName = 'Possibilities section';

export default Possibilities;

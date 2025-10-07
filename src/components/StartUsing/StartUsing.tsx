import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import { ModalContact } from '../Widgets';
import styles from './StartUsing.module.scss';

interface IStep {
  step: string;
}

const StartUsing: FC = () => {
  const { t } = useTranslation<Namespaces>('startUsing');
  const steps = t('steps', { returnObjects: true }) as IStep[];

  const [titleInView, setTitleInView] = useState(false);
  const [stepsInView, setStepsInView] = useState(false);

  const sectionId = t('nav_blocks.start-using', { ns: 'common' });
  const titleId = sectionId + '-title';
  const stepsId = sectionId + '-blocks';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const steps = document.querySelector('#' + stepsId);
    if (!title || !steps) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const blocksObserver = createObserver({
      target: steps,
      onEnter: () => setStepsInView(true),
    });

    return () => {
      titleObserver.disconnect();
      blocksObserver.disconnect();
    };
  });

  return (
    <section className={styles.container} id={t('nav_blocks.start-using', { ns: 'common' })}>
      <h2 className={cn(styles.title, { [styles.title_active]: titleInView })} id={titleId}>
        {t('title')}
      </h2>

      <ul className={cn(styles.steps, { [styles.steps_active]: stepsInView })} id={stepsId}>
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
      <div className={styles.action_wrapper}>
        <ModalContact className={styles.action} text={t('action')} />
        <div className={cn(styles.action__circle, styles.action__circle_1)} />
        <div className={cn(styles.action__circle, styles.action__circle_2)} />
        <div className={cn(styles.action__circle, styles.action__circle_3)} />
      </div>
    </section>
  );
};

StartUsing.displayName = 'Start using section';
export default StartUsing;

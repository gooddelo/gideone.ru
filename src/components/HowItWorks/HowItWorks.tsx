import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { v4 as uuid } from 'uuid';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './HowItWorks.module.scss';

interface IPoint {
  point: string;
}

const HowItWorks: FC = () => {
  const { t } = useTranslation<Namespaces>('howItWorks');
  const points = t('points', { returnObjects: true }) as IPoint[];
  // const firstID = uuid();

  const [titleInView, setTitleInView] = useState(false);
  const [pointsInView, setPointsInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);

  const sectionId = t('nav_blocks.how-it-works', { ns: 'common' });
  const titleId = sectionId + '-title';
  const pointsId = sectionId + '-points';
  const imageId = sectionId + '-image';
  const firstStepId = sectionId + '-first-step';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const points = document.querySelector('#' + pointsId);
    const image = document.querySelector('#' + imageId);
    const firstStep = document.querySelector('#' + firstStepId) as HTMLElement;
    // const firstStepAfter = window.getComputedStyle(firstStep as Element, '::after');
    if (!title || !points || !image || !firstStep) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });
    const blocksObserver = createObserver({
      target: points,
      onEnter: () => setPointsInView(true),
      onChange: (percent) => {
        const pixelAmount = percent * 325;
        firstStep.style.setProperty('--after-extra-height', `${pixelAmount}px`);
      },
    });

    const imageObserver = createObserver({
      target: image,
      onEnter: () => setImageInView(true),
    });

    return () => {
      titleObserver.disconnect();
      blocksObserver.disconnect();
      imageObserver.disconnect();
    };
  });

  return (
    <section className={styles.container} id={sectionId}>
      <div className={styles.info}>
        <h2 id={titleId} className={cn(styles.title, { [styles.title_active]: titleInView })}>
          {t('title')}
        </h2>

        <ul id={pointsId} className={cn(styles.points, { [styles.points_active]: pointsInView })}>
          {Array.isArray(points) &&
            points.map((item, i) => (
              <li
                key={'point' + Math.random() + i}
                id={i === 0 ? firstStepId : undefined}
                className={styles.point}
              >
                <div className={styles.point__circle} />
                <div className={styles.point__text}>{item.point}</div>
              </li>
            ))}
        </ul>
      </div>
      <img
        className={cn(styles.image, { [styles.image_active]: imageInView })}
        src={t('img')}
        alt={t('imgAlt')}
        id={imageId}
        width={902}
        height={838}
      />
    </section>
  );
};

HowItWorks.displayName = 'How gideone works section';

export default HowItWorks;

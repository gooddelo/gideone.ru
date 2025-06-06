import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Analytics.module.scss';

const Analytics: FC = () => {
  const { t } = useTranslation<Namespaces>('analytics');
  const [titleInView, setTitleInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const sectionId = t('nav_blocks.analytics', { ns: 'common' });
  const titleId = sectionId + '-title';
  const blocksId = sectionId + '-blocks';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const blocks = document.querySelector('#' + blocksId);
    if (!title || !blocks) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const blocksObserver = createObserver({ target: blocks, onEnter: () => setCardsInView(true) });

    return () => {
      titleObserver.disconnect();
      blocksObserver.disconnect();
    };
  });

  return (
    <section className={styles.container} id={sectionId}>
      <h2 className={cn(styles.title, { [styles.title_active]: titleInView })} id={titleId}>
        {t('title')}
      </h2>
      <div className={cn(styles.content, { [styles.content_active]: cardsInView })} id={blocksId}>
        <div className={cn(styles.item, styles.first)}>
          <h4 className={cn(styles.item__title)}>{t('items.1.name')}</h4>
          <p className={styles.item__description}>{t('items.1.description')}</p>
          <img
            className={cn(styles.item__img_1, styles.item__img)}
            src={t('items.1.img-1')}
            width={1600}
            height={928}
            alt=""
          />
          <img
            className={cn(styles.item__img_2, styles.item__img)}
            src={t('items.1.img-2')}
            width={1666}
            height={928}
            alt=""
          />
        </div>

        <div className={cn(styles.item, styles.second)}>
          <h4 className={styles.item__title}>
            <span>{t('items.2.name')} </span> {t('items.2.subname')}
          </h4>
          <p className={styles.item__description}>{t('items.2.description')}</p>
          <img
            className={cn(styles.item__img_3, styles.item__img)}
            src={t('items.2.img-1')}
            width={2120}
            height={240}
            alt=""
          />
        </div>

        <div className={cn(styles.item, styles.third)}>
          <div>
            <h4 className={styles.item__title}>{t('items.3.name')}</h4>
            <p className={styles.item__description}>{t('items.3.description')}</p>
          </div>
          <img
            className={cn(styles.item__img_4, styles.item__img)}
            src={t('items.3.img-1')}
            width={452}
            height={928}
            alt=""
          />
        </div>

        <div className={cn(styles.item, styles.fourth)}>
          <h4 className={styles.item__title}>
            <span className={cn(styles.item__title_sub_block)}>{t('items.4.name')}</span>{' '}
            {t('items.4.subname')}
          </h4>
          <p className={styles.item__description}>{t('items.4.description')}</p>
          <img
            className={cn(styles.item__img_5, styles.item__img)}
            src={t('items.4.img-1')}
            width={2120}
            height={1152}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

Analytics.displayName = 'Analytics section';

export default Analytics;

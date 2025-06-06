import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Sales.module.scss';

const Sales: FC = () => {
  const { t } = useTranslation<Namespaces>('sales');

  const [titleInView, setTitleInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const sectionId = t('nav_blocks.sales', { ns: 'common' });
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
        <div className={cn(styles.block, styles.first)}>
          <h4 className={cn(styles.block__title)}>
            {t('analytics.name')}{' '}
            <span className={styles.block__title_yellow}>{t('analytics.subname')}</span>
          </h4>
          <p className={styles.block__description}>{t('analytics.description')}</p>
          <div className={styles.first__images}>
            <img src={t('analytics.img_1')} width={836} height={976} alt={t('analytics.name')} />
            <img src={t('analytics.img_2')} width={1008} height={976} alt={t('analytics.name')} />
          </div>
        </div>

        <div className={cn(styles.block, styles.second)}>
          <h4 className={cn(styles.block__title)}>
            <span className={styles.block__title_yellow}>{t('education.name')}</span>
            {t('education.subname')}
          </h4>
          <p className={styles.block__description}>{t('education.description')}</p>
          <div className={styles.second__images}>
            <img src={t('education.img_1')} width={2116} height={800} alt={t('education.name')} />
          </div>
        </div>

        <div className={cn(styles.block, styles.third)}>
          <h4 className={cn(styles.block__title)}>
            <span className={styles.block__title_yellow}>{t('dashboards.name')}</span>
          </h4>
          <p className={styles.block__description}>{t('dashboards.description')}</p>
          <div className={styles.third__images}>
            <img src={t('dashboards.img_1')} width={1144} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_2')} width={1616} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_3')} width={1844} height={425} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_4')} width={1876} height={420} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_5')} width={1140} height={420} alt={t('dashboards.name')} />
            <img src={t('dashboards.img_6')} width={1568} height={420} alt={t('dashboards.name')} />
          </div>
        </div>
      </div>
    </section>
  );
};

Sales.displayName = 'Sales section';

export default Sales;

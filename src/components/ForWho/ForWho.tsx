import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './ForWho.module.scss';

interface IItem {
  name: string;
  description: string;
  img: string;
}

const ForWho: FC = () => {
  const { t } = useTranslation<Namespaces>('forWho');
  const list = t('list', { returnObjects: true }) as IItem[];

  const [titleInView, setTitleInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);

  const sectionId = t('nav_blocks.for-who', { ns: 'common' });
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
      <div className={cn(styles.list, { [styles.list_active]: cardsInView })} id={blocksId}>
        {Array.isArray(list) &&
          list.map((item, i) => (
            <div key={item.name + i} className={cn(styles.item, styles[`item_${i + 1}`])}>
              <img
                src={item.img}
                alt={item.name}
                className={styles.item__img}
                width={774}
                height={378}
              />
              <h4 className={styles.item__name}>{item.name}</h4>
              <p className={styles.item__description}>{item.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

ForWho.displayName = 'For who section';

export default ForWho;

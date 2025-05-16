import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { DragBlock } from '@/components/UI';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Decisions.module.scss';

interface IDecision {
  name: string;
  description: string;
  img: string;
}

const Decisions: FC = () => {
  const { t } = useTranslation<Namespaces>('decisions');
  const decisions = t('decisions', { returnObjects: true }) as Array<IDecision>;

  const [titleInView, setTitleInView] = useState(false);
  const [cardsInView, setCardsInView] = useState(false);
  const [dragInView, setDragInView] = useState(false);

  const sectionId = t('nav_blocks.decisions', { ns: 'common' });
  const titleId = sectionId + '-title';
  const blocksId = sectionId + '-blocks';
  const dragId = sectionId + '-drag';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const blocks = document.querySelector('#' + blocksId);
    const drag = document.querySelector('#' + dragId);
    if (!title || !blocks || !drag) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const blocksObserver = createObserver({ target: blocks, onEnter: () => setCardsInView(true) });

    const dragObserver = createObserver({ target: drag, onEnter: () => setDragInView(true) });

    return () => {
      titleObserver.disconnect();
      blocksObserver.disconnect();
      dragObserver.disconnect();
    };
  });

  return (
    <section className={styles.container} id={sectionId}>
      <h2 className={cn(styles.title, { [styles.title_active]: titleInView })} id={titleId}>
        {t('title')}
      </h2>
      <img
        width={2607}
        height={856}
        src={'/img/decisions_bg.png'}
        alt={'decisions'}
        className={styles.img}
      />
      <div
        id={blocksId}
        className={cn(styles.decisions, { [styles.decisions_active]: cardsInView })}
      >
        {Array.isArray(decisions) &&
          decisions.map((decision, i) => (
            <div className={styles.decision} key={decision.name + i}>
              <h4 className={styles.decision__name}>{decision.name}</h4>
              <p className={styles.decision__description}>{decision.description}</p>
              <img
                width={564}
                height={207}
                className={styles.decision__img}
                src={decision.img}
                alt={decision.name}
              />
            </div>
          ))}
      </div>

      <DragBlock
        id={dragId}
        className={cn(styles.drag_block, { [styles.drag_block_active]: dragInView })}
      >
        {Array.isArray(decisions) &&
          decisions.map((decision, i) => (
            <div className={styles.decision} key={decision.name + i}>
              <h4 className={styles.decision__name}>{decision.name}</h4>
              <p className={styles.decision__description}>{decision.description}</p>
              <img
                width={564}
                height={207}
                className={styles.decision__img}
                src={decision.img}
                alt={decision.name}
              />
            </div>
          ))}
      </DragBlock>
    </section>
  );
};

Decisions.displayName = 'Decisions section';

export default Decisions;

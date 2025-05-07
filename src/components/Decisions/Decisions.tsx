import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { DragBlock } from '@/components/UI';
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

  return (
    <section className={styles.container} id={t('nav_blocks.decisions', { ns: 'common' })}>
      <h2 className={styles.title}>{t('title')}</h2>
      <img
        width={2607}
        height={856}
        src={'/img/decisions_bg.png'}
        alt={'decisions'}
        className={styles.img}
      />
      <div className={styles.decisions}>
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

      <DragBlock className={styles.drag_block}>
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

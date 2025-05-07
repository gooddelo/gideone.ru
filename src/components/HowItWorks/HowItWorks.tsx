import type { FC } from 'react';
// import howWorksEn from '../../../public/img/bot-message-en.png';
// import howWorksRu from '../../../public/img/bot-message-ru.png';
import { useTranslation } from 'react-i18next';
import type { Namespaces } from '@/types';
import styles from './HowItWorks.module.scss';

interface IPoint {
  point: string;
}

const HowItWorks: FC = () => {
  const { t } = useTranslation<Namespaces>('howItWorks');
  const points = t('points', { returnObjects: true }) as IPoint[];

  return (
    <section className={styles.container} id={t('nav_blocks.how-it-works', { ns: 'common' })}>
      <div className={styles.info}>
        <h2 className={styles.title}>{t('title')}</h2>

        <ul className={styles.points}>
          {Array.isArray(points) &&
            points.map((item, i) => (
              <li key={'point' + Math.random() + i} className={styles.point}>
                <div className={styles.point__circle} />
                <div className={styles.point__text}>{item.point}</div>
              </li>
            ))}
        </ul>
      </div>
      <img
        className={styles.image}
        src={'/img/bot-message-ru.png'}
        alt={'how-gideone-works'}
        width={902}
        height={838}
      />
    </section>
  );
};

HowItWorks.displayName = 'How gideone works section';

export default HowItWorks;

import type { FC } from 'react';
import styles from './ForWho.module.scss';
import { useTranslation } from 'react-i18next';

interface IItem {
  name: string;
  description: string;
  img: string;
}

const ForWho: FC = () => {
  const { t } = useTranslation('forWho');
  const list = t('list', { returnObjects: true }) as IItem[];
  return (
    <section className={styles.container} id={t('nav_blocks.for-who', { ns: 'common' })}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.list}>
        {Array.isArray(list) &&
          list.map((item, i) => (
            <div key={item.name + i} className={styles.item}>
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

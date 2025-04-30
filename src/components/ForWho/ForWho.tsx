import { getServerTranslation, I18nConfig } from '@/i18n';
import { FC } from 'react';
import styles from './ForWho.module.scss';
import Image from 'next/image';

interface IItem {
  name: string;
  description: string;
  img: string;
}

const ForWho: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['forWho', 'common']);
  const list = t('list', { returnObjects: true }) as IItem[];
  return (
    <section className={styles.container} id={t('nav_blocks.for-who', { ns: 'common' })}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.list}>
        {list.map((item, i) => (
          <div key={item.name + i} className={styles.item}>
            <Image
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

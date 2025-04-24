import { FC } from 'react';
import styles from './HowGideoneWorks.module.scss';
import { Locales } from '@/i18n/i18nConfig';
import { getServerTranslation } from '@/i18n';
import howWorksEn from '../../../public/img/bot-message-en.png';
import howWorksRu from '../../../public/img/bot-message-ru.png';
import Image from 'next/image';
import { I18nConfig } from '@/i18n';

interface IPoint {
  point: string;
}

const HowGideoneWorks: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['howGideoneWorks', 'common']);
  const points = t('points', { returnObjects: true }) as IPoint[];

  return (
    <section className={styles.container} id={t('nav_blocks.how-it-works', { ns: 'common' })}>
      <div className={styles.info}>
        <h2 className={styles.title}>{t('title')}</h2>

        <ul className={styles.points}>
          {points.length &&
            points.map((item, i) => (
              <li key={'point' + Math.random() + i} className={styles.point}>
                <div className={styles.point__circle} />
                <div className={styles.point__text}>{item.point}</div>
              </li>
            ))}
        </ul>
      </div>
      <Image
        className={styles.image}
        src={locale === Locales.RU ? howWorksRu : howWorksEn}
        alt={'how-gideone-works'}
        width={902}
        height={838}
      />
    </section>
  );
};

export default HowGideoneWorks;

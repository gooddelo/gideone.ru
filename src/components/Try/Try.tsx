import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContact } from '@/components/Widgets';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Try.module.scss';

interface IReason {
  reason: string;
}

const Try: FC = () => {
  const { t } = useTranslation<Namespaces>('try');
  const reasons = t('reasons', { returnObjects: true }) as Array<IReason>;

  // const [titleInView, setTitleInView] = useState(false);
  const [imageInView, setImageInView] = useState(false);

  const sectionId = t('nav_blocks.try', { ns: 'common' });
  // const titleId = sectionId + '-title';
  const imageId = sectionId + '-image';

  useEffect(() => {
    // const title = document.querySelector('#' + titleId);
    const image = document.querySelector('#' + imageId);
    if (!image) return;
    // if (!title || !blocks) return;

    // const titleObserver = createObserver({
    //   target: title,
    //   onEnter: () => setTitleInView(true),
    // });

    const imageObserver = createObserver({ target: image, onEnter: () => setImageInView(true) });

    return () => {
      // titleObserver.disconnect();
      imageObserver.disconnect();
    };
  });
  return (
    <section className={styles.container} id={sectionId}>
      <div className={styles.content}>
        <h3 className={styles.title}>
          {t('title')} <span className={styles.title__inner}>{t('title_2')}</span>
        </h3>
        <ul className={styles.reasons}>
          {Array.isArray(reasons) &&
            reasons.map((reason, i) => (
              <li key={reason.reason + i} className={styles.reason}>
                <img src={'/svg/check.svg'} alt="check" width={40} height={40} />
                {reason.reason}
              </li>
            ))}
        </ul>
        {/* <button className={styles.action}>{t('action')}</button> */}

        <ModalContact className={styles.action} text={t('action')} />
      </div>
      <img
        src={t('img')}
        className={cn(styles.img, { [styles.img_active]: imageInView })}
        width={919}
        height={710}
        id={imageId}
        alt="try"
      />
    </section>
  );
};

Try.displayName = 'Try section';

export default Try;

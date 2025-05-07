import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContact } from '@/components/Widgets';
import styles from './Try.module.scss';

interface IReason {
  reason: string;
}

const Try: FC = () => {
  const { t } = useTranslation('try');
  const reasons = t('reasons', { returnObjects: true }) as Array<IReason>;
  return (
    <section className={styles.container} id={t('nav_blocks.try', { ns: 'common' })}>
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
      <img src={t('img')} className={styles.img} width={919} height={710} alt="try" />
    </section>
  );
};

Try.displayName = 'Try section';

export default Try;

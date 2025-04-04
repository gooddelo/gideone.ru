import { FC } from 'react';
import styles from './Subscriptions.module.scss';
import { I18nConfig } from '@/i18n/i18nConfig';
import Image from 'next/image';
import cn from 'classnames';
import { getServerTranslation } from '@/i18n';

interface Subscription {
  title: string;
  price: string;
  per?: string;
  description: string;
  options: { name: string }[];
  action: string;
}

const Subscriptions: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['subscriptions']);

  const subscriptions = t('subscriptions', { returnObjects: true }) as Array<Subscription>;

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.subscriptions}>
        {subscriptions.map((subscription, i) => (
          <div
            key={(subscription.title, i)}
            className={cn(styles.subscription, styles[`subscription_${i + 1}`])}
          >
            <h3 className={styles.subscription__name}>{subscription.title}</h3>

            <div className={styles.subscription__price_wrapper}>
              <p className={styles.subscription__price}>
                {subscription.price} <span>{t('currency')}</span>
              </p>

              {subscription.per ? (
                <p className={styles.subscription__per}>{t('per', { per: subscription.per })}</p>
              ) : null}
            </div>
            <p className={styles.subscription__description}>{subscription.description}</p>
            <ul className={styles.subscription__options}>
              {subscription.options.map((option, i) => (
                <li key={option.name + i + Math.random()} className={styles.subscription__option}>
                  <Image src='/svg/check.svg' alt='check' width={40} height={40} />
                  {option.name}
                </li>
              ))}
            </ul>

            <button
              className={cn(styles.subscription__action, styles[`subscription__action_${i + 1}`])}
            >
              {subscription.action}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Subscriptions;

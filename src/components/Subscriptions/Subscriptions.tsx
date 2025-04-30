import { FC } from 'react';
import styles from './Subscriptions.module.scss';
import Image from 'next/image';
import cn from 'classnames';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { ModalContact } from '../ModalContact';

interface Subscription {
  title: string;
  price: string;
  per?: string;
  description: string;
  options: { name: string }[];
  action: string;
}

const Subscriptions: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['subscriptions', 'common']);

  const subscriptions = t('subscriptions', { returnObjects: true }) as Array<Subscription>;

  return (
    <section className={styles.container} id={t('nav_blocks.subscriptions', { ns: 'common' })}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.subscriptions}>
        {subscriptions.map((subscription, i) => (
          <div
            key={(subscription.title, i)}
            className={cn(styles.subscription, styles[`subscription_${i + 1}`])}
          >
            <div>
              <h3 className={styles.subscription__name}>{subscription.title}</h3>

              <div className={styles.subscription__price_wrapper}>
                <p className={styles.subscription__price}>
                  {subscription.price} <span>{t('currency')}</span>
                </p>

                {subscription.per ? (
                  <p className={styles.subscription__per}>{subscription.per}</p>
                ) : null}
              </div>
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

            {/* <button
              className={cn(styles.subscription__action, styles[`subscription__action_${i + 1}`])}
            >
              {subscription.action}
            </button> */}

            <ModalContact
              className={cn(styles.subscription__action, styles[`subscription__action_${i + 1}`])}
              locale={locale}
              text={subscription.action}
            />
          </div>
        ))}

        <Image
          src={'/svg/curved-line.svg'}
          width={1920}
          height={63}
          alt='curved-line'
          className={styles.curved_line}
        />
      </div>

      <div className={styles.enterprise}>
        <div className={styles.enterprise__content}>
          <h3 className={styles.enterprise__title}>{t('enterprise.title')}</h3>
          <div>
            <div className={styles.enterprise__amount}>{t('enterprise.amount')}</div>
            <div className={styles.enterprise__employees}>{t('enterprise.employees')}</div>
          </div>
          {/* <button className={styles.enterprise__button}>{t('enterprise.button')}</button> */}

          <ModalContact
            className={styles.enterprise__button}
            locale={locale}
            text={t('enterprise.button')}
          />
        </div>

        <Image
          src={'/img/enterprise.png'}
          alt={'enterprise'}
          width={522}
          height={491}
          className={styles.enterprise__img}
        />
      </div>
    </section>
  );
};

Subscriptions.displayName = 'Subscriptions section';

export default Subscriptions;

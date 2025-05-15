import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalContact } from '@/components/Widgets';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Subscriptions.module.scss';

interface Subscription {
  title: string;
  price: string;
  per?: string;
  description: string;
  options: { name: string }[];
  action: string;
}

const Subscriptions: FC = () => {
  const { t } = useTranslation<Namespaces>('subscriptions');

  const subscriptions = t('subscriptions', { returnObjects: true }) as Array<Subscription>;

  const [titleInView, setTitleInView] = useState(false);
  const [subscriptionsInView, setSubscriptionsInView] = useState(false);
  const [enterpriseInView, setEnterpriseInView] = useState(false);
  // const [enterpriseImgInView, setEnterpriseImgInView] = useState(false);

  const sectionId = t('nav_blocks.subscriptions', { ns: 'common' });
  const titleId = sectionId + '-title';
  const subscriptionsId = sectionId + '-subscriptions';
  const enterpriseId = sectionId + '-enterprise';
  const enterpriseImgId = enterpriseId + '-img';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const subscriptions = document.querySelector('#' + subscriptionsId);
    const enterprise = document.querySelector('#' + enterpriseId);
    // const enterpriseImg = document.querySelector('#' + enterpriseImgId);

    if (!title || !subscriptions || !enterprise) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const subscriptionsObserver = createObserver({
      target: subscriptions,
      onEnter: () => setSubscriptionsInView(true),
    });

    const enterpriseObserver = createObserver({
      target: enterprise,
      onEnter: () => setEnterpriseInView(true),
    });

    // const enterpriseImgObserver = createObserver({
    //   target: enterpriseImg,
    //   onEnter: () => setEnterpriseImgInView(true),
    // });

    return () => {
      titleObserver.disconnect();
      subscriptionsObserver.disconnect();
      enterpriseObserver.disconnect();
      // enterpriseImgObserver.disconnect();
    };
  });

  return (
    <section id={sectionId} className={styles.container}>
      <h2 id={titleId} className={cn(styles.title, { [styles.title_active]: titleInView })}>
        {t('title')}
      </h2>
      <div
        id={subscriptionsId}
        className={cn(styles.subscriptions, { [styles.subscriptions_active]: subscriptionsInView })}
      >
        {Array.isArray(subscriptions) &&
          subscriptions.map((subscription, i) => (
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
                    <img src="/svg/check.svg" alt="check" width={40} height={40} />
                    {option.name}
                  </li>
                ))}
              </ul>
              <ModalContact
                className={cn(styles.subscription__action, styles[`subscription__action_${i + 1}`])}
                text={subscription.action}
              />
            </div>
          ))}

        <img
          src={'/svg/curved-line.svg'}
          width={1920}
          height={63}
          alt="curved-line"
          className={styles.curved_line}
        />
      </div>

      <div
        id={enterpriseId}
        className={cn(styles.enterprise, { [styles.enterprise_active]: enterpriseInView })}
      >
        <div className={styles.enterprise__content}>
          <h3 className={styles.enterprise__title}>{t('enterprise.title')}</h3>
          <div>
            <div className={styles.enterprise__amount}>{t('enterprise.amount')}</div>
            <div className={styles.enterprise__employees}>{t('enterprise.employees')}</div>
          </div>
          <ModalContact className={styles.enterprise__button} text={t('enterprise.button')} />
        </div>

        <img
          id={enterpriseImgId}
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

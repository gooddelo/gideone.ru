import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/UI';
import { HeaderLangBtn } from '@/components/Widgets';
import type { Namespaces } from '@/types';
import styles from './HeaderLarge.module.scss';

const HeaderLarge: FC = () => {
  const { t } = useTranslation<Namespaces>('header');
  const [inView, setInView] = useState(false);

  const goTop = () => {
    if (!window) return;
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // optional for smooth scroll
    });
  };

  useEffect(() => {
    const target = document.querySelector('#banner-button');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setInView(true);
        } else {
          setInView(false);
        }
      },
      {
        threshold: Array.from({ length: 11 }, (_, i) => i / 10), // [0, 0.1, 0.2, ..., 1.0]
      },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(styles.header, inView && styles.header__shown)} id="header-large">
      <img onClick={goTop} src="/img/logo.png" alt="banner" width={182} height={64} />
      <nav className={styles.nav}>
        <a href={t('nav_links.about', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.about', { ns: 'common' })}
        </a>
        <a href={t('nav_links.subscriptions', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.subscriptions', { ns: 'common' })}
        </a>
        <a href={t('nav_links.faq', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.faq', { ns: 'common' })}
        </a>
        <a href={t('nav_links.news', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.news', { ns: 'common' })}
        </a>
      </nav>

      <div className={styles.right}>
        <div className={styles.contact}>
          <a className={styles.contact__link} href={`tel:${t('phone', { ns: 'common' })}`}>
            {t('phone', { ns: 'common' })}
          </a>
          <a href={t('telegram_link', { ns: 'common' })} target="_blank" className={styles.icon}>
            <Icon icon="telegram" />
          </a>
        </div>

        <HeaderLangBtn />
      </div>
    </div>
  );
};

HeaderLarge.displayName = 'Header large';

export default HeaderLarge;

'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './HeaderLarge.module.scss';
import cn from 'classnames';
import { I18nConfig } from '@/i18n';
import Link from 'next/link';
import { Icon } from '@/components/UI';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { HeaderLangBtn } from '../HeaderLangBtn';
import '../../i18n/client';

const HeaderLarge: FC<I18nConfig> = ({ locale }) => {
  const { t } = useTranslation('header', { lng: locale });
  const [inView, setInView] = useState(false);
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
      }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={cn(styles.header, inView && styles.header__shown)} id='header-large'>
      <Image src='/img/logo.png' alt='banner' width={182} height={64} />
      <nav className={styles.nav}>
        <Link href={t('nav_links.about', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.about', { ns: 'common' })}
        </Link>
        <Link href={t('nav_links.subscriptions', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.subscriptions', { ns: 'common' })}
        </Link>
        <Link href={t('nav_links.faq', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.faq', { ns: 'common' })}
        </Link>
        <Link href={t('nav_links.news', { ns: 'common' })} className={styles.nav__link}>
          {t('nav.news', { ns: 'common' })}
        </Link>
      </nav>

      <div className={styles.right}>
        <div className={styles.contact}>
          <Link className={styles.contact__link} href={`tel:${t('phone', { ns: 'common' })}`}>
            {t('phone', { ns: 'common' })}
          </Link>
          <Link href={t('telegram_link', { ns: 'common' })} target='_blank' className={styles.icon}>
            <Icon icon='telegram' />
          </Link>
        </div>
        {/* <button className={styles.lang}>{t('lang.ru')}</button> */}
        <HeaderLangBtn locale={locale} />
      </div>
    </div>
  );
};

export default HeaderLarge;

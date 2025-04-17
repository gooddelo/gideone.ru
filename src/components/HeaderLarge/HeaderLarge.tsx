'use client';
import React, { FC, useEffect, useState } from 'react';
import styles from './HeaderLarge.module.scss';
import cn from 'classnames';
import { I18nConfig } from '@/i18n';
import Link from 'next/link';
import { Icon } from '@/components/UI';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

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
    <div className={cn(styles.header, inView && styles.header__shown)}>
      <Image src='/img/logo.png' alt='banner' width={182} height={64} />
      <nav className={styles.nav}>
        <Link href={`/about`} className={styles.nav__link}>
          {t('nav.about')}
        </Link>
        <Link href={`/prices`} className={styles.nav__link}>
          {t('nav.prices')}
        </Link>
        <Link href={`/faq`} className={styles.nav__link}>
          {t('nav.faq')}
        </Link>
        <Link href={`/contacts`} className={styles.nav__link}>
          {t('nav.contacts')}
        </Link>
      </nav>

      <button className={styles.burger}>
        <Icon className={styles.burger__icon} icon='burger-menu' size={24} />
      </button>

      <div className={styles.right}>
        <div className={styles.contact}>
          <a className={styles.contact__link} href={`tel:${t('phone')}`}>
            {t('phone')}
          </a>
          <div className={styles.icon}>
            <Icon icon='telegram' />
          </div>
        </div>
        <button className={styles.lang}>{t('lang.ru')}</button>
      </div>
    </div>
  );
};

export default HeaderLarge;

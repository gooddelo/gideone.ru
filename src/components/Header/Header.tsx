import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { initTranslations } from '@/i18n';
import { Locales } from '@/i18n/i18nConfig';
import { Icon } from '@/components/UI';

export const Header: FC = async () => {
  const { t } = await initTranslations(Locales.RU, ['header']);

  return (
    <header className={styles.header}>
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
      <div className={styles.right}>
        <div className={styles.contact}>
          <a href={`tel:${t('phone')}`}>{t('phone')}</a>
          <div className={styles.icon}>
            <Icon icon='telegram' />
          </div>
        </div>
        <button className={styles.lang}>{t('lang.ru')}</button>
      </div>
    </header>
  );
};

export default Header;

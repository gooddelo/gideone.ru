import { FC } from 'react';
import styles from './Header.module.scss';
import Link from 'next/link';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { Icon } from '@/components/UI';

export const Header: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['header', 'common']);

  return (
    <header className={styles.header} id='header'>
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
        <button className={styles.lang}>{t('lang.ru')}</button>
      </div>
    </header>
  );
};

export default Header;

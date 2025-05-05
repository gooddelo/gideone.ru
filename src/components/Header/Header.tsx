import type { FC } from 'react';
import styles from './Header.module.scss';
import { Icon } from '@/components/UI';
import { HeaderLangBtn } from '../HeaderLangBtn';
import { useTranslation } from 'react-i18next';

export const Header: FC = () => {
  // console.log('header locale:  ' + locale);
  const { t } = useTranslation('header');

  return (
    <header className={styles.header} id='header'>
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
          <a href={t('telegram_link', { ns: 'common' })} target='_blank' className={styles.icon}>
            <Icon icon='telegram' />
          </a>
        </div>
        <HeaderLangBtn />
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

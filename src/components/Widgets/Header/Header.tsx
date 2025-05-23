import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/UI';
import { HeaderLangBtn } from '@/components/Widgets';
import { useGetPhone } from '@/hooks';
import type { Namespaces } from '@/types';
import styles from './Header.module.scss';

export const Header: FC = () => {
  const { t } = useTranslation<Namespaces>('header');
  const phone = useGetPhone();

  return (
    <header className={styles.header} id="header">
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
          <a
            className={styles.contact__link}
            href={`tel:${phone.href}`}
            // href={`tel:${t('phone', { ns: 'common' })}`}
          >
            {phone.display}
            {/* {t('phone', { ns: 'common' })} */}
          </a>
          <a href={t('links.telegram', { ns: 'common' })} target="_blank" className={styles.icon}>
            <Icon icon="telegram" size={24} />
          </a>
        </div>
        <HeaderLangBtn />
      </div>
    </header>
  );
};

Header.displayName = 'Header';

export default Header;

'use client';
import { Dispatch, FC, SetStateAction, useRef } from 'react';
import { I18nConfig } from '@/i18n';
import Link from 'next/link';
import { Icon } from '../UI';
import { useTranslation } from 'react-i18next';
import { useClickOutside } from '@/hooks';
import cn from 'classnames';
import styles from './Menu.module.scss';

interface IProps extends I18nConfig {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<IProps> = ({ locale, open, setOpen }) => {
  const { t } = useTranslation('header', { lng: locale });

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLMenuElement>(null);

  const handleClose = () => setOpen(false);

  useClickOutside(menuRef, handleClose);
  return (
    <div className={cn(styles.container, { [styles.container_open]: open })} ref={containerRef}>
      <menu className={cn(styles.menu, { [styles.menu_open]: open })} id='menu' ref={menuRef}>
        <button onClick={handleClose} className={styles.close__btn}>
          <Icon icon='dismiss' size={32} />
        </button>
        <nav className={styles.nav}>
          <Link
            onClick={handleClose}
            href={t('nav_links.about', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.about', { ns: 'common' })}
          </Link>
          <Link
            onClick={handleClose}
            href={t('nav_links.subscriptions', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.subscriptions', { ns: 'common' })}
          </Link>
          <Link
            onClick={handleClose}
            href={t('nav_links.faq', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.faq', { ns: 'common' })}
          </Link>
          <Link
            onClick={handleClose}
            href={t('nav_links.news', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.news', { ns: 'common' })}
          </Link>
        </nav>

        <div className={styles.contacts}>
          <div className={styles.contacts__socials}>
            <Link
              onClick={handleClose}
              href={t('vk_link', { ns: 'common' })}
              target='_blank'
              className={styles.contacts__social}
            >
              <Icon icon='vk' size={32} />
            </Link>
            <Link
              onClick={handleClose}
              href={t('telegram_link', { ns: 'common' })}
              target='_blank'
              className={styles.contacts__social}
            >
              <Icon icon='telegram' size={32} />
            </Link>
          </div>
          <Link
            onClick={handleClose}
            href={`tel:${t('phone', { ns: 'common' })}`}
            className={styles.contacts__phone}
          >
            {t('phone', { ns: 'common' })}
          </Link>
        </div>
      </menu>
    </div>
  );
};

export default Menu;

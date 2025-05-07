import cn from 'classnames';
import { type Dispatch, type FC, type SetStateAction, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/UI';
import { useClickOutside } from '@/hooks';
import type { Namespaces } from '@/types';
import styles from './Menu.module.scss';

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<IProps> = ({ open, setOpen }) => {
  const { t } = useTranslation<Namespaces>('header');

  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLMenuElement>(null);

  const handleClose = () => setOpen(false);

  useClickOutside(menuRef, handleClose);
  return (
    <div className={cn(styles.container, { [styles.container_open]: open })} ref={containerRef}>
      <menu className={cn(styles.menu, { [styles.menu_open]: open })} id="menu" ref={menuRef}>
        <button onClick={handleClose} className={styles.close__btn}>
          <Icon icon="dismiss" size={32} />
        </button>
        <nav className={styles.nav}>
          <a
            onClick={handleClose}
            href={t('nav_links.about', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.about', { ns: 'common' })}
          </a>
          <a
            onClick={handleClose}
            href={t('nav_links.subscriptions', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.subscriptions', { ns: 'common' })}
          </a>
          <a
            onClick={handleClose}
            href={t('nav_links.faq', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.faq', { ns: 'common' })}
          </a>
          <a
            onClick={handleClose}
            href={t('nav_links.news', { ns: 'common' })}
            className={styles.nav__link}
          >
            {t('nav.news', { ns: 'common' })}
          </a>
        </nav>

        <div className={styles.contacts}>
          <div className={styles.contacts__socials}>
            <a
              onClick={handleClose}
              href={t('vk_link', { ns: 'common' })}
              target="_blank"
              className={cn(styles.contacts__social, styles.vk)}
            >
              <Icon icon="vk" size={32} />
            </a>
            <a
              onClick={handleClose}
              href={t('telegram_link', { ns: 'common' })}
              target="_blank"
              className={cn(styles.contacts__social, styles.telegram)}
            >
              <Icon icon="telegram" size={32} />
            </a>
          </div>
          <a
            onClick={handleClose}
            href={`tel:${t('phone', { ns: 'common' })}`}
            className={styles.contacts__phone}
          >
            {t('phone', { ns: 'common' })}
          </a>
        </div>
      </menu>
    </div>
  );
};

Menu.displayName = 'Menu';

export default Menu;

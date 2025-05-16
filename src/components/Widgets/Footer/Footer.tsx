import cn from 'classnames';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/UI';
import { ModalContact, ModalQuestion } from '@/components/Widgets';
import { useGetPhone } from '@/hooks';
import { useGetAboutProductLink } from '@/hooks/useGetAboutProductLink';
import { type Namespaces } from '@/types';
import styles from './Footer.module.scss';

export const Footer: FC = () => {
  const { t } = useTranslation<Namespaces>('footer');
  const phone = useGetPhone();
  const link = useGetAboutProductLink();

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.top}>
        <img src="/img/logo.png" alt="banner" width={182} height={64} />
        <nav className={styles.nav}>
          <a href={link} className={styles.nav__link}>
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
      </div>
      <div className={styles.actions}>
        <div className={styles.actions__links}>
          <div className={styles.socials}>
            <a
              href={t('links.vk', { ns: 'common' })}
              target="_blank"
              className={cn(styles.actions__social)}
            >
              <Icon icon="vk" size={32} className={styles.actions__social_vk} />
            </a>
            <a
              href={t('links.telegram', { ns: 'common' })}
              target="_blank"
              className={styles.actions__social}
            >
              <Icon icon="telegram" size={32} />
            </a>
          </div>
          <div className={styles.contacts}>
            <div className={cn(styles.contacts__phone)}>
              <a href={`tel:${phone.href}`} className={cn(styles.contact, styles.actions__phone)}>
                <Icon icon="phone" size={32} />
                {phone.display}
              </a>
            </div>
            <div className={cn(styles.contacts__email)}>
              <a
                href={`mailto:${import.meta.env.VITE_GIDEONE_EMAIL}`}
                className={cn(styles.contact, styles.actions__email)}
              >
                <Icon icon="email" size={32} />
                {import.meta.env.VITE_GIDEONE_EMAIL}
              </a>
            </div>
          </div>
        </div>
        <ModalContact text={t('application')} className={styles.actions__application} />
      </div>
      <div className={styles.bottom}>
        <ModalQuestion />
        <a
          className={styles.bottom__link}
          href={t('links.skolkovo', { ns: 'common' })}
          target="_blank"
        >
          <img src="/img/logo-skolkovo.png" alt="Сколково" width={55} height={55} />
        </a>
        <a
          className={styles.bottom__link}
          href={t('links.innovation_fond', { ns: 'common' })}
          target="_blank"
        >
          <img src="/img/logo-fond.png" alt="Фонд содействия инновациям" width={122} height={60} />
        </a>
      </div>
      <div className={styles.juridical}>
        <div className={styles.juridical__company}>
          <div>{t('juridical.name')}</div>
          <div>{t('juridical.copyright')}</div>
        </div>
        <address className={styles.juridical__address}>{t('juridical.address')}</address>
        <div className={styles.juridical__main}>
          <div className={styles.juridical__info}>
            <div>{t('juridical.inn')}</div>
            <div>{t('juridical.ogrn')}</div>
            <div>{t('juridical.okved')}</div>
            <div>{t('juridical.it-actions')}</div>
          </div>
          <div className={styles.juridical__links}>
            <a
              href={t('links.privacy_policy', { ns: 'common' })}
              className={cn(styles.links__link)}
              rel="nofollow"
            >
              {t('links.personal')}
            </a>
            <a href="" className={cn(styles.links__link)} rel="nofollow">
              {t('links.support')}
            </a>
            <a href="" className={cn(styles.links__link)} rel="nofollow">
              {t('links.review')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer block';

export default Footer;

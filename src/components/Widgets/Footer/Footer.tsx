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
              href={t('vk_link', { ns: 'common' })}
              target="_blank"
              className={cn(styles.actions__social)}
            >
              <Icon icon="vk" size={32} className={styles.actions__social_vk} />
            </a>
            <a
              href={t('telegram_link', { ns: 'common' })}
              target="_blank"
              className={styles.actions__social}
            >
              <Icon icon="telegram" size={32} />
            </a>
          </div>
          <a
            // href={`tel:${t('phone', { ns: 'common' })}`}
            href={`tel:${phone.href}`}
            className={styles.actions__phone}
          >
            {/* {location?.address.country_code === 'ru' ? t('phone', { ns: 'common' }) :} */}
            {phone.display}
          </a>
        </div>
        {/* <button className={styles.actions__application}>{t('application')}</button> */}
        <ModalContact text={t('application')} className={styles.actions__application} />
      </div>
      <div className={styles.bottom}>
        <ModalQuestion />
        <a className={styles.bottom__link} href={'https://www.sk.ru/'} target="_blank">
          <img src="/img/logo-skolkovo.png" alt="Сколково" width={55} height={55} />
        </a>
        <a className={styles.bottom__link} href={'https://fasie.ru/'} target="_blank">
          <img src="/img/logo-fond.png" alt="Фонд содействия инновациям" width={122} height={60} />
        </a>
      </div>
      <div className={styles.links}>
        <div className={cn(styles.links__group, styles.links__copyright)}>{t('copyright')}</div>
        <div className={cn(styles.links__group, styles.column)}>
          <a
            target="_blank"
            href={t('privacy_policy_link', { ns: 'common' })}
            className={styles.links__link}
          >
            {t('user_agreement')}
          </a>
          <a
            target="_blank"
            href={t('privacy_policy_link', { ns: 'common' })}
            className={styles.links__link}
          >
            {t('policy')}
          </a>
        </div>
        <div className={cn(styles.links__group, styles.column)}>
          <a
            target="_blank"
            href={t('privacy_policy_link', { ns: 'common' })}
            className={styles.links__link}
          >
            {t('support')}
          </a>
          <a
            target="_blank"
            href={t('privacy_policy_link', { ns: 'common' })}
            className={styles.links__link}
          >
            {t('review')}
          </a>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer block';

export default Footer;

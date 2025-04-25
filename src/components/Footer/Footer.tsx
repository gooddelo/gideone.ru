import { FC } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { Icon } from '../UI';
import Image from 'next/image';
import cn from 'classnames';
import Logo from '../UI/Logo';

export const Footer: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['footer', 'common']);
  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.top}>
        <Logo />
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
      </div>
      <div className={styles.actions}>
        <Link
          href={t('vk_link', { ns: 'common' })}
          target='_blank'
          className={cn(styles.actions__social)}
        >
          <Icon icon='vk' size={32} className={styles.actions__social_vk} />
        </Link>
        <Link
          href={t('telegram_link', { ns: 'common' })}
          target='_blank'
          className={styles.actions__social}
        >
          <Icon icon='telegram' size={32} />
        </Link>
        <Link href={`tel:${t('phone', { ns: 'common' })}`} className={styles.actions__phone}>
          {t('phone', { ns: 'common' })}
        </Link>
        <button className={styles.actions__application}>{t('application')}</button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.questions}>
          <input placeholder={t('questions')}></input>
          <button>{t('send')}</button>
        </div>
        <Link href={'https://www.sk.ru/'} target='_blank'>
          <Image src='/img/logo-skolkovo.png' alt='Сколково' width={55} height={55} />
        </Link>
        <Link href={'https://fasie.ru/'} target='_blank'>
          <Image
            src='/img/logo-fond.png'
            alt='Фонд содействия инновациям'
            width={122}
            height={60}
          />
        </Link>
      </div>
      <div className={styles.links}>
        <div className={cn(styles.links__group, styles.links__copyright)}>{t('copyright')}</div>
        <div className={styles.links__group}>
          <Link target='_blank' href={''} className={styles.links__link}>
            {t('user_agreement')}
          </Link>
          <Link target='_blank' href={''} className={styles.links__link}>
            {t('policy')}
          </Link>
        </div>
        <div className={styles.links__group}>
          <Link target='_blank' href={''} className={styles.links__link}>
            {t('support')}
          </Link>
          <Link target='_blank' href={''} className={styles.links__link}>
            {t('review')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

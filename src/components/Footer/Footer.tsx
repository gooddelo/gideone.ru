import { FC } from 'react';
import styles from './Footer.module.scss';
import Link from 'next/link';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { Icon } from '../UI';
import Image from 'next/image';
import cn from 'classnames';
import Logo from '../UI/Logo';

export const Footer: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['footer']);
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <Logo />
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
      </div>
      <div className={styles.actions}>
        <Link href={''} className={styles.actions__social}>
          <Icon icon='vk' size={32} />
        </Link>
        <Link href={''} className={styles.actions__social}>
          <Icon icon='telegram' size={32} />
        </Link>
        <a href={`tel:${t('phone')}`} className={styles.actions__phone}>
          {t('phone')}
        </a>
        <button className={styles.actions__application}>{t('application')}</button>
      </div>
      <div className={styles.bottom}>
        <div className={styles.questions}>
          <p>{t('questions')}</p>
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

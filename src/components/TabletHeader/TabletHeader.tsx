import React, { FC } from 'react';
import styles from './TabletHeader.module.scss';
import { getServerTranslation, I18nConfig } from '@/i18n';
import { Burger } from '../Burger';
import Link from 'next/link';
import { Icon } from '../UI';
import { HeaderLangBtn } from '../HeaderLangBtn';

const TabletHeader: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['header', 'common']);
  return (
    <div className={styles.tablet}>
      <div className={styles.tablet__contact}>
        <Burger locale={locale} />
        <Link href={t('telegram_link', { ns: 'common' })} target='_blank' className={styles.icon}>
          <Icon icon='telegram' />
        </Link>
      </div>
      <HeaderLangBtn locale={locale} />
    </div>
  );
};

export default TabletHeader;

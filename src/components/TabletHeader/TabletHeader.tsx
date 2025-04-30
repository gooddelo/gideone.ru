import React, { FC } from 'react';
import styles from './TabletHeader.module.scss';
import { getServerTranslation, I18nConfig } from '@/i18n';
import Link from 'next/link';
import { Icon } from '@/components/UI';
import { HeaderLangBtn } from '../HeaderLangBtn';
import { Burger } from '../Burger';

const TabletHeader: FC<I18nConfig> = async ({ locale }) => {
  const { t } = await getServerTranslation(locale, ['header', 'common']);
  return (
    <div className={styles.tablet} id='tablet-header'>
      <div className={styles.tablet__contact}>
        <Burger locale={locale} />
        <Link href={t('telegram_link', { ns: 'common' })} target='_blank' className={styles.icon}>
          <Icon icon='telegram' />
        </Link>
      </div>
      <HeaderLangBtn />
    </div>
  );
};

TabletHeader.displayName = 'Table Header';

export default TabletHeader;

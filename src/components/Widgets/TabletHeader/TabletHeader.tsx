import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Icon } from '@/components/UI';
import { Burger, HeaderLangBtn } from '@/components/Widgets';
import type { Namespaces } from '@/types';
import styles from './TabletHeader.module.scss';

const TabletHeader: FC = () => {
  const { t } = useTranslation<Namespaces>('header');
  return (
    <div className={styles.tablet} id="tablet-header">
      <div className={styles.tablet__contact}>
        <Burger />
        <a href={t('links.telegram', { ns: 'common' })} target="_blank" className={styles.icon}>
          <Icon icon="telegram" size={24} />
        </a>
      </div>
      <HeaderLangBtn />
    </div>
  );
};

TabletHeader.displayName = 'Table Header';

export default TabletHeader;

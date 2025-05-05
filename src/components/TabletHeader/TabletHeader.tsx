import { type FC } from 'react';
import styles from './TabletHeader.module.scss';
import { Icon } from '@/components/UI';
import { HeaderLangBtn } from '../HeaderLangBtn';
import { Burger } from '../Burger';
import { useTranslation } from 'react-i18next';

const TabletHeader: FC = () => {
  const { t } = useTranslation('header');
  return (
    <div className={styles.tablet} id='tablet-header'>
      <div className={styles.tablet__contact}>
        <Burger />
        <a href={t('telegram_link', { ns: 'common' })} target='_blank' className={styles.icon}>
          <Icon icon='telegram' />
        </a>
      </div>
      <HeaderLangBtn />
    </div>
  );
};

TabletHeader.displayName = 'Table Header';

export default TabletHeader;

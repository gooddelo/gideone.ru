import { type FunctionComponent } from 'react';
import { Icon } from '@/components/UI';
import styles from './Logo.module.scss';

const Logo: FunctionComponent = () => {
  return (
    <div className={styles.logo}>
      <div className={styles.logo__icon_wrapper}>
        <img src="/svg/logo-bg.svg" className={styles.logo__icon_bg} />
        <Icon icon="logo" size={44} className={styles.logo__icon} />
      </div>
      <span className={styles.logo__text}>Gideone</span>
    </div>
  );
};

Logo.displayName = 'UI Logo';

export default Logo;

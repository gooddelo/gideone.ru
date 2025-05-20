import { Player } from '@lottiefiles/react-lottie-player';
import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { Tasks } from '@/components';
import { ModalContact } from '@/components/Widgets';
import type { Namespaces } from '@/types';
import styles from './Banner.module.scss';

const Banner: FC = () => {
  const { t } = useTranslation<Namespaces>('banner');
  const [mobileText, setMobileText] = useState<string>(t('button'));
  const [apple, setApple] = useState<boolean>(false);

  useEffect(() => {
    const isApple = () => {
      const nav = navigator as Navigator & {
        userAgentData?: {
          platform?: string;
        };
      };

      if (nav.userAgentData?.platform) {
        return /macOS|iOS/i.test(nav.userAgentData.platform);
      }

      return /iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent);
    };

    setApple(isApple());
    const toggleTasks = () => {
      if (window.innerWidth > 720) setMobileText(t('button'));
      else setMobileText(t('button_mobile'));
    };
    window.addEventListener('resize', toggleTasks);
    toggleTasks();
    return () => window.removeEventListener('resize', toggleTasks);
  });

  // console.log(isApple);

  return (
    <section className={styles.banner} id={t('nav_blocks.banner', { ns: 'common' })}>
      <img src={t('logo')} alt="banner" className={styles.logo} width={1604.79} height={787.14} />
      <div className={styles.main}>
        <h1 className={styles.name}>{t('name')}</h1>
        <h2 className={styles.description}>
          <Trans
            i18nKey="description"
            t={t}
            components={{
              br: <br />,
            }}
          />
        </h2>
        <div className={styles.button_wrapper}>
          <ModalContact
            className={cn(styles.button, { [styles.button_apple]: apple })}
            text={mobileText}
            id="banner-button"
          />
          {!apple && <Player autoplay loop src={t('animation')} className={styles.animation} />}
        </div>
      </div>

      <Tasks className={styles.tasks} />
    </section>
  );
};

Banner.displayName = 'Banner section';

export default Banner;

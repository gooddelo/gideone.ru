// import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Player } from '@lottiefiles/react-lottie-player';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { Namespaces } from '@/types';
import styles from './Preview.module.scss';

const Preview: FC = () => {
  const { t } = useTranslation<Namespaces>('preview');
  return (
    <section className={styles.section} id="preview">
      <div style={{ width: 500 }}>
        {/* <DotLottieReact src={t('animation')} loop autoplay /> */}

        <Player
          autoplay
          // loop
          src={t('animation')}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className={styles.info}>
        <p>{t('text')}</p>
        <p>{t('subtext')}</p>
      </div>
    </section>
  );
};

export default Preview;

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import type { Namespaces } from '@/types';
import styles from './Preview.module.scss';

const Preview: FC = () => {
  const { t } = useTranslation<Namespaces>('preview');
  return (
    <section className={styles.section} id="preview">
      <div>
        <DotLottieReact src={t('animation')} loop autoplay />
      </div>
      <div className={styles.info}>
        <p>{t('text')}</p>
        <p>{t('subtext')}</p>
      </div>
    </section>
  );
};

export default Preview;

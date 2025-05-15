import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ConsultationForm } from '@/components/Widgets';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './Consultation.module.scss';

const Consultation: FC = () => {
  const { t } = useTranslation<Namespaces>('consultation');

  const [contentInView, setContentInView] = useState(false);

  const sectionId = t('nav_blocks.consultation', { ns: 'common' });
  const contentId = sectionId + '-content';

  useEffect(() => {
    const content = document.querySelector('#' + contentId);
    if (!content) return;
    const contentObserver = createObserver({
      target: content,
      onEnter: () => setContentInView(true),
    });

    return () => {
      contentObserver.disconnect();
    };
  });

  return (
    <section id={sectionId} className={styles.consultation}>
      <div
        id={contentId}
        className={cn(styles.content, { [styles.content_active]: contentInView })}
      >
        <img
          className={styles.img}
          src={t('img.url')}
          alt={t('img.alt')}
          width={1070}
          height={886}
        />
        <ConsultationForm />
      </div>
    </section>
  );
};

Consultation.displayName = 'Consultation section';

export default Consultation;

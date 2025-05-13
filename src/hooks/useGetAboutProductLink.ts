import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Namespaces } from '@/types';

export const useGetAboutProductLink = () => {
  const { t } = useTranslation<Namespaces>('common');
  const [link, setLink] = useState<string>(t('nav_links.about'));

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) setLink('#analytics_sales');
      else setLink(t('nav_links.about'));
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });

  return link;
};

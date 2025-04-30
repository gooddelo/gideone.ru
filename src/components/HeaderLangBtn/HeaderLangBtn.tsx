'use client';
import { FC, useCallback, useLayoutEffect, useState } from 'react';
import styles from './HeaderLangBtn.module.scss';
import { useTranslation } from 'react-i18next';
import '@/i18n/client';
import cn from 'classnames';
// import React from 'react';

interface IProps {
  className?: string;
}

const HeaderLangBtn: FC<IProps> = ({ className }) => {
  const [locale, setLocale] = useState('ru');
  const { t } = useTranslation('header');

  const handleLangChange = () => {
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newUrl = window.location.href.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newUrl;
  };

  useLayoutEffect(() => {
    const pathLocale = window.location.pathname.split('/')[1];
    setLocale(pathLocale);
  }, []);

  return (
    <button className={cn(styles.lang, className)} onClick={handleLangChange}>
      {t(`lang.${locale}`)}
    </button>
  );
};

HeaderLangBtn.displayName = 'Header language button';

export default HeaderLangBtn;

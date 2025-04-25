'use client';
import React, { FC, useState } from 'react';
import styles from './HeaderLangBtn.module.scss';
import { I18nConfig } from '@/i18n';
import { useTranslation } from 'react-i18next';
import '../../i18n/client';
import cn from 'classnames';

interface IProps extends I18nConfig {
  className?: string;
}

const HeaderLangBtn: FC<IProps> = ({ locale, className }) => {
  const { t } = useTranslation('header');

  const handleLangChange = () => {
    console.log('handleLangChange', locale);
    const newLocale = locale === 'en' ? 'ru' : 'en';
    const newUrl = window.location.href.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newUrl;
  };
  return (
    <button className={cn(styles.lang, className)} onClick={handleLangChange}>
      {t(`lang.${locale}`)}
    </button>
  );
};

export default HeaderLangBtn;

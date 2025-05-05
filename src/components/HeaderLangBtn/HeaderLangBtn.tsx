import { useLayoutEffect, useState, type FC } from 'react';
import styles from './HeaderLangBtn.module.scss';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
// import React from 'react';

interface IProps {
  className?: string;
}

const HeaderLangBtn: FC<IProps> = ({ className }) => {
  const [locale, setLocale] = useState('ru');
  const { t, i18n } = useTranslation('header');

  const handleLangChange = () => {
    // const newLocale = locale === 'en' ? 'ru' : 'en';
    // const newUrl = window.location.href.replace(`/${locale}`, `/${newLocale}`);
    // window.location.href = newUrl;

    if (i18n.language === 'ru') i18n.changeLanguage('en');
    else i18n.changeLanguage('ru');
  };

  useLayoutEffect(() => {
    // const pathLocale = window.location.pathname.split('/')[1];
    setLocale(i18n.language);
  }, [i18n.language]);

  return (
    <button className={cn(styles.lang, className)} onClick={handleLangChange}>
      {t(`lang.${locale}`)}
    </button>
  );
};

HeaderLangBtn.displayName = 'Header language button';

export default HeaderLangBtn;

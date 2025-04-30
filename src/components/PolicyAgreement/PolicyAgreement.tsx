'use client';
import React, { FC, useLayoutEffect, useState } from 'react';
import { InputCheck } from '@/components/UI';
import styles from './PolicyAgreement.module.scss';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { i18nNamespacesType } from '@/i18n/i18nConfig';
import cn from 'classnames';
import '@/i18n/client';
interface IProps {
  checked?: boolean;
  check?: () => void;
  className?: string;
  agreementVia: string;
}

const PolicyAgreement: FC<IProps> = ({ check, className, agreementVia }) => {
  const [locale, setLocale] = useState('ru');
  const { t } = useTranslation<i18nNamespacesType>('common', { lng: locale });

  useLayoutEffect(() => {
    if (!window) return;

    const pathLocale = window.location.pathname.split('/')[1];
    setLocale(pathLocale);
  }, []);
  return (
    <div className={cn(styles.agreement, className)}>
      <InputCheck size='small' onClick={check} checked />
      <p>
        {t('agreement', {
          agreementVia: t(`agreementVia.${agreementVia}`),
        })}
        <Link href={'/policy'} target='_blank'>
          {t('policy')}
        </Link>
        {t('agreement_2')}
      </p>
    </div>
  );
};

PolicyAgreement.displayName = 'Policy agreement';

export default PolicyAgreement;

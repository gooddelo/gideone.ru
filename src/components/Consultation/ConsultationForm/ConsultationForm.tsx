'use client';
import { i18nClient, I18nConfig } from '@/i18n';
import Link from 'next/link';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ConsultationForm.module.scss';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { InputCheck } from '@/components/UI';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  phone: yup.string().required().matches(phoneRegExp),
  message: yup.string().required(),
});

const ConsultationForm: FC<I18nConfig> = ({ locale }) => {
  const { t } = useTranslation('consultation', { i18n: i18nClient, lng: locale });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: unknown) => {
    console.log('onSubmit:', data);
  };

  return (
    <form action='' className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.form__head, styles.form__block_head)}>
        <h3 className={styles.subtitle}>{t('title')}</h3>
        <h3 className={styles.title}>{t('subtitle')}</h3>
      </div>
      <div className={cn(styles.form__fields, styles.form__block)}>
        <input
          className={cn(styles.form__input, [errors.name && styles.input_error])}
          {...register('name')}
          type='text'
          placeholder={t('form.name')}
        />
        <input
          className={cn(styles.form__input, [errors.phone && styles.input_error])}
          {...register('phone')}
          type='tel'
          placeholder={t('form.phone')}
        />
        <textarea
          className={cn(styles.form__message, [errors.message && styles.input_error])}
          {...register('message')}
          name=''
          id=''
          placeholder={t('form.placeholder')}
        ></textarea>
      </div>
      <div className={cn(styles.form__block)}>
        <button type='submit' className={styles.form__btn}>
          {t('button')}
        </button>
        <div className={styles.form__agreement}>
          <InputCheck size='small' />
          <p>
            {t('agreement', { button: t('button') })}
            <Link href={'/policy'} target='_blank'>
              {t('policy')}
            </Link>
            {t('agreement_2')}
          </p>
        </div>
      </div>
    </form>
  );
};

export default ConsultationForm;

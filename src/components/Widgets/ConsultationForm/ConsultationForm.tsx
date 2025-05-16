import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import * as yup from 'yup';
// import { InputCheck } from '@/components/UI';
import { createObserver, emailRegex } from '@/utils';
import type { Namespaces } from '@/types';
import styles from './ConsultationForm.module.scss';

interface ISchema {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().matches(emailRegex),
  message: yup.string().required().min(10),
});

const ConsultationForm: FC = () => {
  const { t } = useTranslation<Namespaces>('consultation');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: ISchema) => {
    setValue('name', '');
    setValue('message', '');
    setValue('email', '');

    const today = new Date();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        name: data.name,
        email: data.email,
        time: today.toDateString(),
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
  };

  const [contentInView, setContentInView] = useState(false);

  const sectionId = t('nav_blocks.consultation', { ns: 'common' });
  const formId = sectionId + '-form';

  useEffect(() => {
    const form = document.querySelector('#' + formId);
    if (!form) return;
    const formObserver = createObserver({
      target: form,
      onEnter: () => setContentInView(true),
    });

    return () => {
      formObserver.disconnect();
    };
  });

  return (
    <form
      action=""
      id={formId}
      className={cn(styles.form, { [styles.form_active]: contentInView })}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={cn(styles.form__head, styles.form__block_head)}>
        <h3 className={styles.title}>
          <Trans
            i18nKey="title"
            t={t}
            components={{
              span: <span className={styles.highlight} />,
            }}
          />
        </h3>
      </div>
      <div className={cn(styles.form__block, styles.form__fields)}>
        <input
          className={cn(styles.form__input, [errors.name && styles.input_error])}
          {...register('name')}
          type="text"
          placeholder={t('form.name')}
        />
        <input
          className={cn(styles.form__input, [errors.email && styles.input_error])}
          {...register('email')}
          type="email"
          placeholder={t('form.email')}
        />
        <textarea
          className={cn(styles.form__message, [errors.message && styles.input_error])}
          {...register('message')}
          // name=""
          // id=""
          placeholder={t('form.placeholder')}
        ></textarea>
      </div>
      <div className={cn(styles.form__block)}>
        <button type="submit" className={styles.form__btn}>
          {t('button')}
        </button>
        <div className={styles.form__agreement}>
          {/* <InputCheck size="small" checked /> */}
          <p>
            {t('agreement', { button: t('button') })}
            <a href={t('links.privacy_policy', { ns: 'common' })} target="_blank">
              {t('policy')}
            </a>
            {t('agreement_2')}
          </p>
        </div>
      </div>
    </form>
  );
};

ConsultationForm.displayName = 'Consultation form';

export default ConsultationForm;

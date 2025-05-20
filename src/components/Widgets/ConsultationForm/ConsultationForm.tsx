import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import Input from '@/components/UI/Input';
// import { InputCheck } from '@/components/UI';
import { createObserver, emailRegex, nameRegex } from '@/utils';
import type { Namespaces } from '@/types';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import styles from './ConsultationForm.module.scss';

interface ISchema {
  name: string;
  email: string;
  message: string;
}

const ConsultationForm: FC = () => {
  const { t } = useTranslation<Namespaces>('consultation');
  const { t: tCommon } = useTranslation<Namespaces>('common');
  const { t: tErrors } = useTranslation<Namespaces>('errors');
  const [success, setSuccess] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(tErrors('input.required'))
      .min(2, tErrors('input.name_short'))
      .matches(nameRegex, tErrors('input.name')),
    email: yup
      .string()
      .required(tErrors('input.required'))
      .matches(emailRegex, tErrors('input.email')),
    message: yup.string().required(tErrors('input.required')),
  });
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
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          name: data.name,
          email: data.email,
          time: today.toDateString(),
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => setSuccess(true));
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

  const closeModal = () => setSuccess(false);

  return (
    <>
      <form
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
          <Input
            {...register('name')}
            label={t('form.name')}
            type="text"
            error={errors.name}
            className={cn(styles.form__input)}
          />
          <Input
            {...register('email')}
            label={t('form.email')}
            type="text"
            error={errors.email}
            className={cn(styles.form__input, styles.mt)}
          />
          <textarea
            className={cn(styles.form__message, [errors.message && styles.input_error])}
            {...register('message')}
            placeholder={t('form.placeholder')}
          />
        </div>
        <div className={cn(styles.form__block)}>
          <button type="submit" className={styles.form__btn}>
            {t('button')}
          </button>
          <div className={styles.form__agreement}>
            {/* <InputCheck size="small" checked /> */}
            <p>
              {t('agreement', { button: t('button') })}
              <a href={tCommon('links.privacy_policy')} target="_blank">
                {t('policy')}
              </a>
              {t('agreement_2')}
            </p>
          </div>
        </div>
      </form>

      {success ? (
        <Modal onClose={closeModal}>
          <ModalSuccess
            onClose={closeModal}
            title={tCommon('modal-question.success_title')}
            text={tCommon('modal-question.success_text')}
          />
        </Modal>
      ) : null}
    </>
  );
};

ConsultationForm.displayName = 'Consultation form';

export default ConsultationForm;

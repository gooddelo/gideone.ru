import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import type { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import * as yup from 'yup';
import { InputCheck } from '@/components/UI';
import styles from './ConsultationForm.module.scss';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  phone: yup.string().required().matches(phoneRegExp),
  message: yup.string().required(),
});

const ConsultationForm: FC = () => {
  const { t } = useTranslation('consultation');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    setValue('name', '');
    setValue('message', '');
    setValue('phone', '');
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
          className={cn(styles.form__input, [errors.phone && styles.input_error])}
          {...register('phone')}
          type="tel"
          placeholder={t('form.phone')}
        />
        <textarea
          className={cn(styles.form__message, [errors.message && styles.input_error])}
          {...register('message')}
          name=""
          id=""
          placeholder={t('form.placeholder')}
        ></textarea>
      </div>
      <div className={cn(styles.form__block)}>
        <button type="submit" className={styles.form__btn}>
          {t('button')}
        </button>
        <div className={styles.form__agreement}>
          <InputCheck size="small" />
          <p>
            {t('agreement', { button: t('button') })}
            <a href={'/policy'} target="_blank">
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

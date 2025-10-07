import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type ChangeEvent, type FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import Input from '@/components/UI/Input';
import { PolicyAgreement } from '@/components/Widgets';
import { emailRegex, nameRegex, phoneRegex } from '@/utils';
import type { Namespaces } from '@/types';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import styles from './ModalContact.module.scss';

interface ISchema {
  name: string;
  email: string;
  phone: string;
}

interface IProps {
  id?: string;
  className?: string;
  text: string;
  switchToBtn?: boolean;
}

const ModalContact: FC<IProps> = ({ id = uuidv4(), className, text, switchToBtn = false }) => {
  const { t } = useTranslation<Namespaces>('common');
  const { t: tErrors } = useTranslation<Namespaces>('errors');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [phone, setPhone] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   if (isModalOpen) {
  //     setModalOpen(true);
  //   }
  // }, [isModalOpen]);

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
    phone: yup
      .string()
      .required(tErrors('input.required'))
      .matches(phoneRegex, tErrors('input.phone'))
      .test('max-digits', tErrors('input.phone_long'), (value) => {
        if (!value) return false;
        const digitCount = (value.match(/\d/g) || []).length;
        return digitCount <= 15 && digitCount >= 10;
      }),
  });

  const formId = id + 'form';

  const toggleModal = useCallback(() => {
    setModalOpen((prev) => !prev);
    setValue('name', '');
    setValue('phone', '');
    setValue('email', '');
    setPhone('');
    setSuccess(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const test = window.location.href.split('?')[1];
    if (test && test.includes('modal=true')) {
      toggleModal();
      // window.location.href = window.location.href.split("?")[0];
      const url = window.location.href.split('?')[0];
      window.history.replaceState({}, '', url);
    }
  }, [toggleModal]);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({ resolver: yupResolver(schema) });

  const openModal = () => toggleModal();

  const onSubmit = (data: ISchema) => {
    setSuccess(true);

    const today = new Date();
    // console.log('phone:  ' + data.phone);
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        name: data.name,
        email: data.email,
        subject: 'Запрос на обратную связь от:',
        time: today.toDateString(),
        message: `Связаться с ${data.email}, номер телефона: ${data.phone}`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
    setValue('name', '');
    setValue('phone', '');
    setValue('email', '');
    setPhone('');
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // Auto-add '+' if user starts with a digit (and no '+' exists)
    if (/^\d/.test(value) && !value.startsWith('+')) {
      value = `+${value}`;
    }

    setPhone(value);
  };

  return (
    <>
      <button
        className={cn(styles.button, switchToBtn && styles.button__switchBtn, className)}
        onClick={openModal}
        id={id}
      >
        {text}
      </button>

      {modalOpen && (
        <Modal
          onClose={toggleModal}
          hideBtn={success}
          className={cn(styles.modal, success && styles.modal__success)}
        >
          {!success ? (
            <>
              <h4 className={styles.modal__title}>{t('modal-contact.title', { ns: 'common' })}</h4>
              <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
                <Input
                  {...register('name')}
                  type="text"
                  className={cn(styles.modal__input)}
                  label={t('modal-contact.name', { ns: 'common' })}
                  error={errors.name}
                />
                <Input
                  {...register('phone')}
                  type="text"
                  onChange={handlePhoneChange}
                  value={phone}
                  label={t('modal-contact.phone', { ns: 'common' })}
                  error={errors.phone}
                  className={styles.modal__input}
                />
                <Input
                  {...register('email')}
                  type="text"
                  className={cn(styles.modal__input)}
                  label={t('modal-contact.email', { ns: 'common' })}
                  error={errors.email}
                />
              </form>
              <div className={styles.modal__btns}>
                <button form={formId} className={styles.modal__btn} type="submit">
                  {t('modal-contact.send', { ns: 'common' })}
                </button>
                <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
              </div>
            </>
          ) : (
            <ModalSuccess
              title={t('modal-contact.success_title', { ns: 'common' })}
              text={t('modal-contact.success_text', { ns: 'common' })}
              onClose={toggleModal}
            />
          )}
        </Modal>
      )}
    </>
  );
};

ModalContact.displayName = 'Modal contact';

export default ModalContact;

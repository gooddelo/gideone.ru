import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, type FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
// import { Resend } from 'resend';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import { PolicyAgreement } from '@/components/Widgets';
import { emailRegex, secureStorage } from '@/utils';
import { SESSION_STORAGE_KEYS } from '@/types';
import type { Namespaces } from '@/types';
import styles from './ModalContact.module.scss';

interface ISchema {
  name: string;
  email: string;
  phone: string;
}

export const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().matches(emailRegex),
  phone: yup.string().required(),
});

interface IProps {
  id?: string;
  className?: string;
  text: string;
  switchToBtn?: boolean;
}

const ModalContact: FC<IProps> = ({ id = uuidv4(), className, text, switchToBtn = false }) => {
  const { t } = useTranslation<Namespaces>('common');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem, removeSessionItem } = secureStorage();
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS,
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };

  const formId = id + 'form';

  const toggleModal = () => setModalOpen((prev) => !prev);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({ resolver: yupResolver(schema) });

  const openModal = () => {
    toggleModal();
    setValue('phone', getSessionItem(SESSION_STORAGE_KEYS.question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.contact_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.contact_name) || '');
  };
  const onSubmit = (data: ISchema) => {
    const today = new Date();
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        {
          name: data.name,
          email: data.email,
          time: today.toDateString(),
          message: `Связаться с ${data.email}, номер телефона: ${data.phone}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        removeSessionItem([
          SESSION_STORAGE_KEYS.question,
          SESSION_STORAGE_KEYS.contact_email,
          SESSION_STORAGE_KEYS.contact_name,
        ]);
        setModalOpen(false);
      });
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
        <Modal onClose={toggleModal} className={styles.modal}>
          <h4 className={styles.modal__title}>{t('modal-contact.title', { ns: 'common' })}</h4>
          <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
            <input
              className={cn(styles.modal__input, [errors.name && styles.input_error])}
              {...register('name')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_name)}
              type="text"
              placeholder={t('modal-contact.name', { ns: 'common' })}
            />
            <input
              className={cn(styles.modal__input, [errors.phone && styles.input_error])}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_phone)}
              {...register('phone')}
              type="tel"
              placeholder={t('modal-contact.phone', { ns: 'common' })}
            />
            <input
              className={cn(styles.modal__input, [errors.email && styles.input_error])}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_email)}
              {...register('email')}
              type="email"
              placeholder={t('modal-contact.email', { ns: 'common' })}
            />
          </form>
          <div className={styles.modal__btns}>
            <button form={formId} className={styles.modal__btn} type="submit">
              {t('modal-contact.send', { ns: 'common' })}
            </button>
            <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
          </div>
        </Modal>
      )}
    </>
  );
};

ModalContact.displayName = 'Modal contact';

export default ModalContact;

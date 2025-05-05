import { useState, type FC, type FormEvent } from 'react';
import { Modal } from '@/components/UI';
import styles from './ModalContact.module.scss';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import { SESSION_STORAGE_KEYS } from '@/types';
import { secureStorage } from '@/utils';
import cn from 'classnames';
import { PolicyAgreement } from '../PolicyAgreement';
import { v4 as uuidv4 } from 'uuid';

interface ISchema {
  name: string;
  email: string;
  message: string;
}

export const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().min(2),
  message: yup.string().required(),
});

interface IProps {
  id?: string;
  className?: string;
  text: string;
  switchToBtn?: boolean;
}

const ModalContact: FC<IProps> = ({ id = uuidv4(), className, text, switchToBtn = false }) => {
  const { t } = useTranslation('common');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem } = secureStorage();
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };

  const formId = id + 'form';

  const toggleModal = () => setModalOpen((prev) => !prev);
  const { register, setValue, handleSubmit } = useForm<ISchema>({ resolver: yupResolver(schema) });

  const openModal = () => {
    toggleModal();
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.contact_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.contact_name) || '');
  };

  const onSubmit = () => {
    setModalOpen(false);
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
              className={styles.modal__input}
              {...register('name')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_name)}
              type='text'
              placeholder={t('modal-contact.name', { ns: 'common' })}
            />
            <input
              className={styles.modal__input}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_phone)}
              {...register('email')}
              type='email'
              placeholder={t('modal-contact.phone', { ns: 'common' })}
            />
            <input
              className={styles.modal__input}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.contact_email)}
              {...register('email')}
              type='email'
              placeholder={t('modal-contact.email', { ns: 'common' })}
            />
          </form>
          <div className={styles.modal__btns}>
            <button form={formId} className={styles.modal__btn} type='submit'>
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

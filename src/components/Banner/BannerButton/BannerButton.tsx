'use client';

import { FC, FormEvent, useState } from 'react';
import styles from './BannerButton.module.scss';
import { useTranslation } from 'react-i18next';
import { SESSION_STORAGE_KEYS } from '@/types';
import { secureStorage } from '@/utils';
import { Modal } from '@/components/UI';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import PolicyAgreement from '@/components/PolicyAgreement';
import { I18nConfig } from '@/i18n';
import '../../../i18n/client'; // Import the i18n client to ensure translations are available
const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().min(2),
  message: yup.string().required(),
});

const BannerButton: FC<I18nConfig> = ({ locale }) => {
  const { t } = useTranslation('banner', { lng: locale });
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem } = secureStorage();
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };

  const toggleModal = () => setModalOpen((prev) => !prev);
  const { register, setValue } = useForm({ resolver: yupResolver(schema) });

  const openModal = () => {
    toggleModal();
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.faq_question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.faq_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.faq_name) || '');
  };

  return (
    <>
      <button className={styles.button} onClick={openModal} id='banner-button'>
        {t('button')}
      </button>

      {modalOpen && (
        <Modal onClose={toggleModal} className={styles.modal}>
          <h4 className={styles.modal__title}>{t('modal.title')}</h4>
          <div className={styles.modal__fields}>
            {/* <textarea
              className={styles.modal__textarea}
              placeholder={t('modal.question')}
              {...register('message')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_question)}
            ></textarea> */}
            <input
              className={styles.modal__input}
              {...register('name')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_name)}
              type='text'
              placeholder={t('modal.name')}
            />
            <input
              className={styles.modal__input}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_email)}
              {...register('email')}
              type='email'
              placeholder={t('modal.phone')}
            />
            <input
              className={styles.modal__input}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_email)}
              {...register('email')}
              type='email'
              placeholder={t('modal.email')}
            />
          </div>
          <div className={styles.modal__btns}>
            <button className={styles.modal__btn}>{t('modal.send')}</button>
            <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
          </div>
        </Modal>
      )}
    </>
  );
};

export default BannerButton;

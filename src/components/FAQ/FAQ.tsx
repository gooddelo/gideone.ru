'use client';
import { FC, FormEvent, useState } from 'react';
import styles from './FAQ.module.scss';
import { I18nConfig } from '@/i18n';
import { Icon } from '@/components/UI';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { secureStorage } from '@/utils';
import { SESSION_STORAGE_KEYS } from '@/types';
import Modal from '../UI/Modal/Modal';
import PolicyAgreement from '../PolicyAgreement';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().min(2),
  message: yup.string().required(),
});

const FAQ: FC<I18nConfig> = () => {
  const { t } = useTranslation('faq');
  const [open, setOpen] = useState<number | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem } = secureStorage();
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };

  const questions = t('questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const { register, setValue } = useForm({ resolver: yupResolver(schema) });

  const toggleModal = () => setModalOpen((prev) => !prev);

  const openModal = () => {
    toggleModal();
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.faq_question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.faq_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.faq_name) || '');
  };

  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>{t('title')}</h2>
      <div className={styles.faq__questions}>
        {questions.map(({ question, answer }, i) => (
          <div
            key={question + Math.random()}
            className={cn(styles.question)}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <div
              className={cn(styles.question__head, {
                [styles.question__head_open]: open === i,
              })}
            >
              {question}{' '}
              <button className={styles.question__btn}>
                <Icon icon='chevron-down' size={24} />
              </button>
            </div>
            <div
              className={cn([
                styles.question__answer,
                {
                  [styles.question__answer_open]: open === i,
                },
              ])}
            >
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.faq__ask}>
        <input
          type='text'
          placeholder={t('ask')}
          onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_question)}
        />
        <button onClick={openModal}>{t('send')}</button>
      </div>

      {modalOpen && (
        <Modal onClose={toggleModal} className={styles.modal}>
          <h4 className={styles.modal__title}>{t('modal.title')}</h4>
          <div className={styles.modal__fields}>
            <textarea
              className={styles.modal__textarea}
              placeholder={t('modal.question')}
              {...register('message')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.faq_question)}
            ></textarea>
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
              placeholder={t('modal.email')}
            />
          </div>
          <div className={styles.modal__btns}>
            <button className={styles.modal__btn}>{t('modal.send')}</button>
            <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default FAQ;

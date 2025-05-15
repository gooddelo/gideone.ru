import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, type FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import { PolicyAgreement } from '@/components/Widgets';
import { emailRegex, secureStorage } from '@/utils';
import { SESSION_STORAGE_KEYS } from '@/types';
import type { Namespaces } from '@/types';
import styles from './ModalQuestion.module.scss';

interface ISchema {
  name: string;
  email: string;
  message: string;
}

export const schema = yup.object().shape({
  name: yup.string().required().min(2),
  email: yup.string().required().matches(emailRegex),
  message: yup.string().required().min(10),
});

interface IProps {
  inputText?: string;
  buttonText?: string;

  switchToBtn?: boolean;

  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  switchClassName?: string;
}

const ModalQuestion: FC<IProps> = ({
  inputText,
  buttonClassName,
  buttonText,
  inputClassName,
  className,
  switchToBtn = false,
  switchClassName,
}) => {
  const { t } = useTranslation<Namespaces>('common');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem, removeSessionItem } = secureStorage();
  const toggleModal = () => setModalOpen((prev) => !prev);
  const openModal = () => {
    toggleModal();
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.question_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.question_name) || '');
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<ISchema>({ resolver: yupResolver(schema) });
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS,
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };
  // const resend = new Resend(import.meta.env.VITE_RESEND_KEY);

  const onSubmit = (data: ISchema) => {
    setModalOpen(false);

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
      .then(() => {
        removeSessionItem([
          SESSION_STORAGE_KEYS.question,
          SESSION_STORAGE_KEYS.question_email,
          SESSION_STORAGE_KEYS.question_name,
        ]);
      });
  };

  const formId = uuidv4();

  return (
    <>
      <div className={cn(styles.main, className)}>
        <input
          type="text"
          placeholder={inputText || t('modal-question.ask')}
          onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
          className={cn(inputClassName)}
        />
        {/* TODO в душе не ебу как и что нужно сделать с кнопкой, но нужно менять текст в зависимости от ширины экрана */}
        <button onClick={openModal} className={buttonClassName}>
          {buttonText || t('modal-question.send')}
        </button>
      </div>
      {switchToBtn && (
        <button onClick={openModal} className={cn(styles.switchBtn, switchClassName)}>
          {t('modal-question.button')}
        </button>
      )}
      {modalOpen && (
        <Modal onClose={toggleModal} open={modalOpen} className={cn(styles.modal)}>
          <h4 className={styles.modal__title}>{t('modal-question.title')}</h4>
          <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
            <textarea
              className={cn(styles.modal__textarea, [errors.name && styles.input_error])}
              placeholder={t('modal-question.question')}
              {...register('message')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
            ></textarea>
            <input
              className={cn(styles.modal__input, [errors.name && styles.input_error])}
              {...register('name')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question_name)}
              type="text"
              placeholder={t('modal-question.name')}
            />
            <input
              className={cn(styles.modal__input, [errors.email && styles.input_error])}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question_email)}
              {...register('email')}
              type="email"
              placeholder={t('modal-question.email')}
            />
          </form>
          <div className={styles.modal__btns}>
            <button form={formId} type="submit" className={styles.modal__btn}>
              {t('modal-question.send')}
            </button>
            <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
          </div>
        </Modal>
      )}
    </>
  );
};

ModalQuestion.displayName = 'Modal question';

export default ModalQuestion;

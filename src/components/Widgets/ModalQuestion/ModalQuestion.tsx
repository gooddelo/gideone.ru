import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, type FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import { PolicyAgreement } from '@/components/Widgets';
import { secureStorage } from '@/utils';
import { SESSION_STORAGE_KEYS } from '@/types';
import styles from './ModalQuestion.module.scss';

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
  const { t } = useTranslation('common');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { setSessionItem, getSessionItem } = secureStorage();
  const toggleModal = () => setModalOpen((prev) => !prev);
  const openModal = () => {
    toggleModal();
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.question) || '');
    setValue('email', getSessionItem(SESSION_STORAGE_KEYS.question_email) || '');
    setValue('name', getSessionItem(SESSION_STORAGE_KEYS.question_name) || '');
  };
  const { register, setValue, handleSubmit } = useForm<ISchema>({ resolver: yupResolver(schema) });
  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS,
  ) => {
    setSessionItem(key, e.currentTarget.value);
  };

  const onSubmit = () => {
    setModalOpen(false);
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
        <Modal onClose={toggleModal} className={styles.modal}>
          <h4 className={styles.modal__title}>{t('modal-question.title')}</h4>
          <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
            <textarea
              className={styles.modal__textarea}
              placeholder={t('modal-question.question')}
              {...register('message')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
            ></textarea>
            <input
              className={styles.modal__input}
              {...register('name')}
              onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question_name)}
              type="text"
              placeholder={t('modal-question.name')}
            />
            <input
              className={styles.modal__input}
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

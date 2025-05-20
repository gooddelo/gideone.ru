import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, type FormEvent, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Modal } from '@/components/UI';
import Input from '@/components/UI/Input';
import { PolicyAgreement } from '@/components/Widgets';
import { emailRegex, nameRegex, secureStorage } from '@/utils';
import { type Namespaces, SESSION_STORAGE_KEYS } from '@/types';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import styles from './ModalQuestion.module.scss';

export interface ISchema {
  name: string;
  email: string;
  message: string;
}

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
  const { t: tErrors } = useTranslation<Namespaces>('errors');
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [success, setSuccess] = useState(false);
  const { getSessionItem, setSessionItem, removeSessionItem } = secureStorage();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const toggleModal = () => {
    setModalOpen((prev) => !prev);
    setSuccess(false);
    setValue('name', '');
    setValue('email', '');
    if (inputRef) inputRef.current!.value = '';
  };

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

  const openModal = () => {
    // console.log(getSessionItem(SESSION_STORAGE_KEYS.question));
    setValue('message', getSessionItem(SESSION_STORAGE_KEYS.question) || '');
    toggleModal();
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ISchema>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ISchema) => {
    setSuccess(true);
    const today = new Date();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        name: data.name,
        email: data.email,
        subject: 'Вопрос от:',
        time: today.toDateString(),
        message: `${data.message}`,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );

    removeSessionItem(SESSION_STORAGE_KEYS.question);
    setValue('name', '');
    setValue('message', '');
    setValue('email', '');
  };

  const formId = uuidv4();

  const handleSaveToStorage = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: SESSION_STORAGE_KEYS,
  ) => {
    // console.log(e.currentTarget.value);
    setSessionItem(key, e.currentTarget.value);
  };

  return (
    <>
      <div className={cn(styles.main, className)}>
        <input
          type="text"
          placeholder={inputText || t('modal-question.ask')}
          className={cn(inputClassName)}
          ref={inputRef}
          onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
        />
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
        <Modal
          onClose={toggleModal}
          hideBtn={success}
          className={cn(styles.modal, success && styles.modal__success)}
        >
          {!success ? (
            <>
              <h4 className={styles.modal__title}>{t('modal-question.title')}</h4>
              <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
                <textarea
                  className={cn(styles.modal__textarea, [errors.name && styles.input_error])}
                  placeholder={t('modal-question.question')}
                  {...register('message')}
                  onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
                ></textarea>
                <Input
                  {...register('name')}
                  label={t('modal-question.name')}
                  type="text"
                  error={errors.name}
                  className={styles.modal__input}
                />
                <Input
                  {...register('email')}
                  label={t('modal-question.email')}
                  type="text"
                  error={errors.email}
                  className={styles.modal__input}
                />
              </form>
              <div className={styles.modal__btns}>
                <button form={formId} type="submit" className={styles.modal__btn}>
                  {t('modal-question.send')}
                </button>
                <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
              </div>
            </>
          ) : (
            <ModalSuccess
              onClose={toggleModal}
              title={t('modal-question.success_title')}
              text={t('modal-question.success_text')}
            />
          )}
        </Modal>
      )}
    </>
  );
};

ModalQuestion.displayName = 'Modal question';

export default ModalQuestion;

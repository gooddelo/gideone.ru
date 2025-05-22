import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import cn from 'classnames';
import { type FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import * as yup from 'yup';
import { Icon } from '@/components/UI';
import { Modal } from '@/components/UI';
import Input from '@/components/UI/Input';
import { ModalContact, ModalQuestion, PolicyAgreement } from '@/components/Widgets';
import { useGetPhone } from '@/hooks';
import { useGetAboutProductLink } from '@/hooks/useGetAboutProductLink';
import { emailRegex, nameRegex } from '@/utils';
import { type Namespaces } from '@/types';
import ModalSuccess from '../ModalSuccess/ModalSuccess';
import styles from './Footer.module.scss';

interface ISchema {
  name: string;
  email: string;
  message: string;
}

export const Footer: FC = () => {
  const { t } = useTranslation<Namespaces>('footer');
  const { t: tErrors } = useTranslation<Namespaces>('errors');
  const { t: tCommon } = useTranslation<Namespaces>('common');
  const phone = useGetPhone();
  const link = useGetAboutProductLink();
  const [openTech, setOpenTech] = useState(false);
  const [openReview, setOpenReview] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sentForm, setSentForm] = useState<'tech' | 'review' | null>(null);

  const closeModal = () => {
    setOpenReview(false);
    setOpenTech(false);
    setSuccess(false);
    reset();
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISchema>({ resolver: yupResolver(schema) });

  const onSubmit = (data: ISchema) => {
    // setModalOpen(false);
    setSentForm(openTech ? 'tech' : 'review');
    setSuccess(true);
    const today = new Date();
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE,
      import.meta.env.VITE_EMAILJS_TEMPLATE,
      {
        name: data.name,
        email: data.email,
        time: today.toDateString(),
        subject: sentForm === 'tech' ? 'Техническая поддержка для:' : 'Отзыв от:',
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    );
    setOpenReview(false);
    setOpenTech(false);
    reset();
  };

  const formId = uuidv4();

  return (
    <>
      <footer className={styles.footer} id="footer">
        <div className={styles.top}>
          <img
            className={styles.top__logo}
            src="/img/logo.png"
            alt="banner"
            width={182}
            height={64}
          />
          <nav className={styles.nav}>
            <a href={link} className={styles.nav__link}>
              {tCommon('nav.about')}
            </a>
            <a href={tCommon('nav_links.subscriptions')} className={styles.nav__link}>
              {tCommon('nav.subscriptions')}
            </a>
            <a href={tCommon('nav_links.faq')} className={styles.nav__link}>
              {tCommon('nav.faq')}
            </a>
            <a href={tCommon('nav_links.news')} className={styles.nav__link}>
              {tCommon('nav.news')}
            </a>
          </nav>
        </div>
        <div className={styles.actions}>
          <div className={styles.actions__links}>
            <div className={styles.socials}>
              <a href={tCommon('links.vk')} target="_blank" className={cn(styles.actions__social)}>
                <Icon icon="vk" size={34} className={styles.actions__social_vk} />
              </a>
              <a
                href={tCommon('links.telegram')}
                target="_blank"
                className={styles.actions__social}
              >
                <Icon icon="telegram" size={32} />
              </a>
            </div>
            <div className={styles.contacts}>
              <div className={cn(styles.contacts__phone)}>
                <a href={`tel:${phone.href}`} className={cn(styles.contact, styles.actions__phone)}>
                  <Icon icon="phone" size={32} />
                  {phone.display}
                </a>
              </div>
              <div className={cn(styles.contacts__email)}>
                <a
                  href={`mailto:${import.meta.env.VITE_GIDEONE_EMAIL}`}
                  className={cn(styles.contact, styles.actions__email)}
                >
                  <Icon icon="email" size={28} />
                  {import.meta.env.VITE_GIDEONE_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <ModalContact text={t('application')} className={styles.actions__application} />
        </div>
        <div className={styles.bottom}>
          <ModalQuestion buttonClassName={styles.question_btn} />
          <a className={styles.bottom__link} href={tCommon('links.skolkovo')} target="_blank">
            <img src="/img/logo-skolkovo.png" alt="Сколково" width={55} height={55} />
          </a>
          <a
            className={styles.bottom__link}
            href={tCommon('links.innovation_fond')}
            target="_blank"
          >
            <img
              src="/img/logo-fond.png"
              alt="Фонд содействия инновациям"
              width={122}
              height={60}
            />
          </a>
        </div>
        <div className={styles.juridical}>
          <div className={styles.juridical__company}>
            <div>{t('juridical.name')}</div>
            <div>{t('juridical.copyright')}</div>
          </div>
          <div className={styles.juridical__main}>
            <div className={styles.juridical__info}>
              <address className={styles.juridical__address}>{t('juridical.address')}</address>
              <div>{t('juridical.inn')}</div>
              <div>{t('juridical.ogrn')}</div>
              <div>{t('juridical.okved')}</div>
              <div>{t('juridical.it-actions')}</div>
            </div>
            <div className={styles.juridical__links}>
              <a
                href={tCommon('links.privacy_policy')}
                className={cn(styles.links__link)}
                rel="nofollow"
              >
                {t('links.personal')}
              </a>
              <button
                onClick={() => setOpenTech(true)}
                className={cn(styles.links__link, styles.links__link_support)}
                rel="nofollow"
              >
                {t('links.support')}
              </button>
              <button
                onClick={() => setOpenReview(true)}
                className={cn(styles.links__link, styles.links__link_support)}
                rel="nofollow"
              >
                {t('links.review')}
              </button>
            </div>
          </div>
        </div>
      </footer>
      {openTech || openReview || success ? (
        <Modal onClose={closeModal} hideBtn={success}>
          {!success ? (
            <>
              <h4 className={styles.modal__title}>
                {openTech ? tCommon('modal-support.title') : tCommon('modal-review.title')}
              </h4>
              <form id={formId} onSubmit={handleSubmit(onSubmit)} className={styles.modal__fields}>
                <textarea
                  className={cn(styles.modal__textarea, [errors.name && styles.input_error])}
                  placeholder={
                    openTech ? tCommon('modal-support.textarea') : tCommon('modal-review.textarea')
                  }
                  {...register('message')}
                  // onInput={(e) => handleSaveToStorage(e, SESSION_STORAGE_KEYS.question)}
                ></textarea>
                <Input
                  {...register('name')}
                  label={openTech ? tCommon('modal-support.name') : tCommon('modal-review.name')}
                  type="text"
                  error={errors.name}
                  className={styles.modal__input}
                />
                <Input
                  {...register('email')}
                  label={openTech ? tCommon('modal-support.email') : tCommon('modal-review.email')}
                  type="text"
                  error={errors.email}
                  className={styles.modal__input}
                />
              </form>
              <div className={styles.modal__btns}>
                <button form={formId} type="submit" className={styles.modal__btn}>
                  {openTech ? tCommon('modal-support.send') : tCommon('modal-review.send')}
                </button>
                <PolicyAgreement className={styles.modal__agreement} agreementVia={'send'} />
              </div>
            </>
          ) : (
            <ModalSuccess
              onClose={closeModal}
              title={
                sentForm === 'tech'
                  ? tCommon('modal-support.success-title')
                  : tCommon('modal-review.success-title')
              }
              text={
                sentForm === 'tech'
                  ? tCommon('modal-review.success-text')
                  : tCommon('modal-review.success-text')
              }
            />
          )}
        </Modal>
      ) : null}
    </>
  );
};

Footer.displayName = 'Footer block';

export default Footer;

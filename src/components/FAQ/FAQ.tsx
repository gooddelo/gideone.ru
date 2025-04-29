'use client';
import { FC, useState } from 'react';
import styles from './FAQ.module.scss';
import { I18nConfig } from '@/i18n';
import { Dropdown, Icon } from '@/components/UI';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import '@/i18n/client'; // Import the i18n client to ensure translations are available
import { ModalQuestion } from '@/components/Widgets';

const FAQ: FC<I18nConfig> = ({ locale }) => {
  const { t } = useTranslation('faq', { lng: locale });
  const [open, setOpen] = useState<number | null>(null);

  const questions = t('questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const faqQuestions = Array.isArray(questions) ? questions : [];

  return (
    <section className={styles.faq} id={t('nav_blocks.faq', { ns: 'common' })}>
      <div className={cn(styles.eclipse, styles.eclipse_1)} />
      <div className={cn(styles.eclipse, styles.eclipse_2)} />
      <div className={cn(styles.eclipse, styles.eclipse_3)} />
      <h2 className={styles.faq__title}>{t('title')}</h2>
      <div className={styles.faq__questions}>
        {questions.length &&
          faqQuestions.map(({ question, answer }, i) => (
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

              <Dropdown open={open === i} className={styles.question__answer}>
                <p>{answer}</p>
              </Dropdown>
            </div>
          ))}
      </div>

      <ModalQuestion
        locale={locale}
        className={styles.faq__ask}
        switchToBtn
        switchClassName={styles.switch_btn}
      />
    </section>
  );
};

export default FAQ;

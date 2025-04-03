'use client';
import { FC, useState } from 'react';
import styles from './FAQ.module.scss';
import { I18nConfig } from '@/i18n';
import { Icon } from '@/components/UI';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

const FAQ: FC<I18nConfig> = () => {
  const { t } = useTranslation('faq');
  const [open, setOpen] = useState<number | null>(null);

  const questions = t('questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__title}>{t('title')}</h2>
      <div className={styles.faq__questions}>
        {questions.map(({ question, answer }, i) => (
          <div key={question + Math.random()} className={styles.question}>
            <div className={styles.question__head}>
              {question}{' '}
              <button
                className={styles.question__btn}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <Icon icon='chevron-down' />
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
        <input type='text' placeholder={t('ask')} />
        <button>{t('send')}</button>
      </div>
    </section>
  );
};

export default FAQ;

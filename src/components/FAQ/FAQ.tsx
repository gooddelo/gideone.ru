import cn from 'classnames';
import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ModalQuestion } from '@/components/Widgets';
import { createObserver } from '@/utils';
import type { Namespaces } from '@/types';
import Question from '../UI/Question/Question';
import styles from './FAQ.module.scss';

const FAQ: FC = () => {
  const { t } = useTranslation<Namespaces>('faq');

  const questions = t('questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  const faqQuestions = Array.isArray(questions) ? questions : [];

  const [titleInView, setTitleInView] = useState(false);
  const [questionsInView, setQuestionsInView] = useState(false);

  const sectionId = t('nav_blocks.faq', { ns: 'common' });
  const titleId = sectionId + '-title';
  const questionsId = sectionId + '-blocks';

  useEffect(() => {
    const title = document.querySelector('#' + titleId);
    const questions = document.querySelector('#' + questionsId);
    if (!title || !questions) return;

    const titleObserver = createObserver({
      target: title,
      onEnter: () => setTitleInView(true),
    });

    const questionsObserver = createObserver({
      target: questions,
      onEnter: () => setQuestionsInView(true),
    });

    return () => {
      titleObserver.disconnect();
      questionsObserver.disconnect();
    };
  });

  return (
    <section className={styles.faq} id={sectionId}>
      <div className={cn(styles.eclipse, styles.eclipse_1)} />
      <div className={cn(styles.eclipse, styles.eclipse_2)} />
      <div className={cn(styles.eclipse, styles.eclipse_3)} />
      <h2
        id={titleId}
        className={cn(styles.faq__title, { [styles.faq__title_active]: titleInView })}
      >
        {t('title')}
      </h2>
      <div
        id={questionsId}
        className={cn(styles.faq__questions, { [styles.faq__questions_active]: questionsInView })}
      >
        {questions.length &&
          faqQuestions.map(({ question, answer }, i) => (
            <Question key={question + Math.random() + i} question={question} answer={answer} />
          ))}
      </div>

      <ModalQuestion
        className={cn(styles.faq__ask, { [styles.faq__ask_active]: questionsInView })}
        switchToBtn
        switchClassName={styles.switch_btn}
      />
    </section>
  );
};

FAQ.displayName = 'FAQ section';

export default FAQ;

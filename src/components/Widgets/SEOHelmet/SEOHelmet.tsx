import { type FC, useEffect, useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { getDefLang } from '@/utils';
import { LANGUAGES } from '@/types';

const SEOHelmet: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const [language, setLanguage] = useState<LANGUAGES>(i18n.language as LANGUAGES); // default to English

  useLayoutEffect(() => {
    // const userLanguage = navigator.language;
    // if (userLanguage.startsWith(LANGUAGES.ru)) setLanguage(LANGUAGES.ru);
    // else setLanguage(LANGUAGES.en_us);
    setLanguage(() => getDefLang());
  }, []);

  const getMetaTags = (lang: LANGUAGES) => {
    if (lang === LANGUAGES.ru) {
      return {
        title: 'Gideone - Ваш персональный бизнес-тренер с искусственным интеллектом',
        description:
          'Гидеон предоставляет AI-рекомендации для обучения сотрудников в онлайн и оффлайн торговле.',
        keywords:
          'искусственный интеллект, обучение сотрудников, онлайн обучение, бизнес тренер, рекомендации AI',
      };
    } else {
      return {
        title: 'Gideone - Your Personal AI Business Coach',
        description:
          'Gideone offers AI-powered training recommendations for both online and offline retail employees.',
        keywords:
          'artificial intelligence, employee training, online learning, business coach, AI recommendations',
      };
    }
  };

  const { title, description, keywords } = getMetaTags(language);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Helmet>
      <div>{/* Your content */}</div>
    </>
  );
};

export default SEOHelmet;

import { type FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from '@/types';

const SEOHelmet: FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.title =
      i18n.language === LANGUAGES.ru
        ? 'Gideone - Ваш персональный бизнес-тренер с искусственным интеллектом'
        : 'Gideone - Your Personal AI Business Coach';

    // выбрать meta description, если такового нет - создать
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    // тогл в зависимости от языка
    metaDesc.setAttribute(
      'content',
      i18n.language === LANGUAGES.ru
        ? 'Гидеон предоставляет AI-рекомендации для обучения сотрудников в онлайн и оффлайн торговле.'
        : 'Gideone offers AI-powered training recommendations for both online and offline retail employees.',
    );

    // выбрать meta keywords, если такового нет - создать
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }

    // тогл в зависимости от языка
    metaKeywords.setAttribute(
      'content',
      i18n.language === LANGUAGES.ru
        ? 'искусственный интеллект, обучение сотрудников, онлайн обучение, бизнес тренер, рекомендации AI'
        : 'artificial intelligence, employee training, online learning, business coach, AI recommendations',
    );
  }, [i18n.language]);

  return null;
};

export default SEOHelmet;

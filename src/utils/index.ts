import { LANGUAGES } from '@/types';

export * from './secureStorage';
export * from './createObserver';
export const getDefLang = () => {
  if (navigator.language.startsWith(LANGUAGES.ru)) return LANGUAGES.ru;
  else return LANGUAGES.en_us;
};

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

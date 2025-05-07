import { LANGUAGES } from '@/types';

export * from './secureStorage';
export const getDefLang = () => {
  if (navigator.language.startsWith(LANGUAGES.ru)) return LANGUAGES.ru;
  else return LANGUAGES.en_us;

  // if (navigator.languages.includes(LANGUAGES.ru)) {
  //   const RUindex = navigator.languages.indexOf(LANGUAGES.ru);
  //   console.log(RUindex);
  //   if (RUindex >= 1) return LANGUAGES.en_us;
  //   else return LANGUAGES.ru;
  // } else return LANGUAGES.en_us;
};

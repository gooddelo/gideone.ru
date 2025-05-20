import { LANGUAGES } from '@/types';

export * from './secureStorage';
export * from './createObserver';
export const getDefLang = () => {
  if (navigator.language.startsWith(LANGUAGES.ru)) return LANGUAGES.ru;
  else return LANGUAGES.en_us;
};

// export const nameRegex = /^\p{L}+(?: \p{L}+)*$/u;
export const nameRegex = /^(?!\s)(?:[\p{L}]+(?:[ '-][\p{L}]+)*)?$(?<!\s)/u;
// export const nameRegex = /^[\p{L}]+$/u;
export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// export const phoneRegex = /^\+7\(\d{3}\) \d{3}-\d{2}-\d{2}$|^\+7\(___\) __-__-__$/;
// export const phoneRegex =
//   /^\+(?:[0-9]\x{20}?){1,4}(?:\s?[\-\/(]\x{20}?[0-9\x{20}]+[)\/])?(?:\s?[0-9\x{20}-]+)+$/;

// export const phoneRegex =
//   /^\+(?:[0-9]\x{20}?){1,4}(?:\x{20}?[0-9]{3,}(?:\x{20}?[0-9]{2,})*|\x{20}?\([0-9]{3}\)\x{20}?[0-9]{3}(?:\x{20}?[0-9]{2,})*)$/;

export const phoneRegex =
  /^\+(?:[0-9]\s?){1,4}(?:\s?[0-9]{3,}(?:\s?[0-9]{2,})*|\s?\([0-9]{3}\)\s?[0-9]{3}(?:\s?[0-9]{2,})*)$/;
// Add a validation function to check digit count:
// export function isValidPhone(phone: string) {
//   const digits = phone.replace(/[^\d]/g, '').length - 1; // Exclude country code
//   return phoneRegex.test(phone) && digits >= 10;
// }

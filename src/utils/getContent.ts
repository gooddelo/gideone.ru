import i18n from 'i18next';

export const getContent = (key: string): string => i18n.t(key);

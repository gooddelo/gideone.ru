import type { i18nNamespaces } from '@/locales/namespaces';

export * from './storage';
export * from './i18';

export type Namespaces = (typeof i18nNamespaces)[number];

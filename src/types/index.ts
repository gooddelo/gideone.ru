import type { i18nNamespaces } from '@/locales/namespaces';

export * from './storage';
export * from './i18';
export * from './input';

export type Namespaces = (typeof i18nNamespaces)[number];

export interface IGeolocation {
  address: {
    city: string;
    country: string;
    country_code: string;
    county: string;
    house_number: string;
    postcode: string;
    region: string;
    road: string;
    state: string;
    suburb: string;
  };
  addresstype: string;
  class: string;
  display_name: string;
}

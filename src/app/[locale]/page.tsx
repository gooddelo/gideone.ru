import { FC } from 'react';
import styles from './page.module.scss';
import {
  Analytics,
  Banner,
  Consultation,
  Decisions,
  FAQ,
  ForWho,
  Marquee,
  News,
  Possibilities,
  Sales,
  Subscriptions,
  Tasks,
  Try,
} from '@/components';
import { Locales } from '@/i18n/i18nConfig';

interface HomeProps {
  params: { locale: Locales };
}

const Home: FC<HomeProps> = async ({ params }) => {
  const { locale } = await params;
  return (
    <main className={styles.main}>
      <Banner locale={locale} />
      <Tasks locale={locale} />
      <Marquee />
      <Sales locale={locale} />
      <Analytics locale={locale} />
      <ForWho locale={locale} />
      <Try locale={locale} />
      <Decisions locale={locale} />
      <Possibilities locale={locale} />
      <Subscriptions locale={locale} />
      <FAQ locale={locale} />
      <Consultation locale={locale} />
      <News />
    </main>
  );
};

export default Home;

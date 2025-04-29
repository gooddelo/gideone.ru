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
  HowGideoneWorks,
} from '@/components';
import { Locales } from '@/i18n/i18nConfig';
import { StartUsing } from '@/components/StartUsing';
import { DragBlock } from '@/components/UI';
import { AnalyticsSales } from '@/components/AnalyticsSales';
interface HomeProps {
  params: Promise<{ locale: Locales }>;
}

const Home: FC<HomeProps> = async ({ params }) => {
  const { locale } = await params;

  return (
    <main className={styles.main}>
      <Banner locale={locale} />
      <Tasks locale={locale} />
      <Marquee />
      <AnalyticsSales />
      <Sales locale={locale} />
      <Analytics locale={locale} />
      <ForWho locale={locale} />
      <Try locale={locale} />
      <Decisions locale={locale} />
      <HowGideoneWorks locale={locale} />
      <StartUsing locale={locale} />
      <Possibilities locale={locale} />
      <Subscriptions locale={locale} />
      <FAQ locale={locale} />
      {/* <Consultation locale={locale} /> */}
      <News locale={locale} />
    </main>
  );
};

export default Home;

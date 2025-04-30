import { FC } from 'react';
import styles from './page.module.scss';

import { Locales } from '@/i18n/i18nConfig';
import { StartUsing } from '@/components/StartUsing';
import { DragBlock } from '@/components/UI';
import { AnalyticsSales } from '@/components/AnalyticsSales';
import { Banner } from '@/components/Banner';
import Tasks from '@/components/Tasks';
import Marquee from 'react-fast-marquee';
import Analytics from '@/components/Analytics';
import Sales from '@/components/Sales';
import News from '@/components/News';
import Subscriptions from '@/components/Subscriptions';
import FAQ from '@/components/FAQ';
import Possibilities from '@/components/Possibilities';
import HowGideoneWorks from '@/components/HowGideoneWorks';
import Decisions from '@/components/Decisions';
import Try from '@/components/Try';
import ForWho from '@/components/ForWho';
import Consultation from '@/components/Consultation';
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
      <Consultation locale={locale} />
      <News locale={locale} />
    </main>
  );
};

export default Home;

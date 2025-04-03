import { FC } from 'react';
import styles from './page.module.scss';

import { Banner, Consultation, FAQ, Marquee, News, Tasks } from '@/components';
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
      <FAQ locale={locale} />
      <Consultation locale={locale} />
      <News />
    </main>
  );
};

export default Home;

import { FC } from 'react';
import styles from './page.module.scss';

import { Banner, Marquee, News, Tasks } from '@/components';

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <Banner />
      <Tasks />
      <Marquee />
      <News />
    </main>
  );
};

export default Home;

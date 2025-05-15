import '@/locales';
import { type FC, useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';
import {
  Analytics,
  AnalyticsSales,
  Banner,
  Consultation,
  Decisions,
  FAQ,
  ForWho,
  HowItWorks,
  News,
  Possibilities,
  // Preview,
  Sales,
  StartUsing,
  Subscriptions,
  Tasks,
  Try,
} from '@/components';
import '@/components/Widgets';

export const LandingPage: FC = () => {
  const [showTasks, setShowTasks] = useState(false);

  useEffect(() => {
    const toggleTasks = () => setShowTasks(window.innerWidth <= 1280);
    window.addEventListener('resize', toggleTasks);
    toggleTasks();
    return () => window.removeEventListener('resize', toggleTasks);
  });

  return (
    <>
      <Banner />
      {showTasks && <Tasks />}
      <Marquee />
      {/* <Preview /> */}
      <AnalyticsSales />
      <Sales />
      <Analytics />
      <ForWho />
      <Try />
      <Decisions />
      <HowItWorks />
      <StartUsing />
      <Possibilities />
      <Subscriptions />
      <FAQ />
      <Consultation />
      <News />
    </>
  );
};

export default LandingPage;

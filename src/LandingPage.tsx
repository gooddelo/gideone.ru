import '@/locales';
import { type FC } from 'react';
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
  // Tasks,
  Try,
} from '@/components';
import '@/components/Widgets';

export const LandingPage: FC = () => {
  return (
    <>
      <Banner />
      {/* <Tasks /> */}
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

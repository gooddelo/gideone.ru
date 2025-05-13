import '@/locales';
// import emailjs from '@emailjs/browser';
import { type FC } from 'react';
// import { useEffect } from 'react';
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
import {
  ButtonToTop,
  CookieAgreement,
  Footer,
  Header,
  HeaderLarge,
  // SEOHelmet,
  TabletHeader,
} from '@/components/Widgets';

// import { useGetLocation } from './hooks';

const LandingPage: FC = () => {
  return (
    <>
      <Header />
      <HeaderLarge />
      <TabletHeader />
      {/*  */}
      <Banner />
      <Tasks />
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

      {/* */}
      <CookieAgreement />
      <Footer />
      <ButtonToTop />
      {/*  */}
    </>
  );
};

export default LandingPage;

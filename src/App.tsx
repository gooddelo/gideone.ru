import '@/locales';
// import { useEffect, useLayoutEffect } from 'react';
import Marquee from 'react-fast-marquee';
// import { useTranslation } from 'react-i18next';
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
  SEOHelmet,
  TabletHeader,
} from '@/components/Widgets';

function App() {
  // const { i18n } = useTranslation();

  // useLayoutEffect(() => {
  //   if (!window) return;

  //   const pathLocale = window.location.pathname.split('/')[1];
  //   i18n.changeLanguage(pathLocale);
  // }, []);

  // useEffect(() => {
  //   document.documentElement.lang = i18n.language;
  // }, [i18n.language]);

  return (
    <>
      <SEOHelmet />
      <main>
        {/*  */}
        <Header />
        <HeaderLarge />
        <TabletHeader />
        {/*  */}
        <Banner />
        <Tasks />
        <Marquee />
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
      </main>
    </>
  );
}

export default App;

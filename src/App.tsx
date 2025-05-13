import '@/locales';
import emailjs from '@emailjs/browser';
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
  SEOHelmet,
  TabletHeader,
} from '@/components/Widgets';
import { useGetLocation } from './hooks';

function App() {
  if (window.location.pathname !== '/') window.location.replace('/');
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  useGetLocation();

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
      </main>
    </>
  );
}

export default App;

import emailjs from '@emailjs/browser';
import { type FC } from 'react';
import LandingPage from './LandingPage';
import {
  ButtonToTop,
  CookieAgreement,
  Footer,
  Header,
  HeaderLarge,
  SEOHelmet,
  TabletHeader,
} from './components/Widgets';
import { useGetLocation } from './hooks';

const App: FC = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  useGetLocation();

  return (
    <>
      <SEOHelmet />
      <Header />
      <HeaderLarge />
      <TabletHeader />
      <main>
        <LandingPage />
      </main>
      <CookieAgreement />
      <Footer />
      <ButtonToTop />
    </>
  );
};

export default App;

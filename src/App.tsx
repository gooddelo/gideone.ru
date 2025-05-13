import emailjs from '@emailjs/browser';
import { type FC } from 'react';
import LandingPage from './LandingPage';
import { SEOHelmet } from './components/Widgets';
import { useGetLocation } from './hooks';

const App: FC = () => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  useGetLocation();
  return (
    <>
      <SEOHelmet />
      <main>
        <LandingPage />
      </main>
    </>
  );
};

export default App;

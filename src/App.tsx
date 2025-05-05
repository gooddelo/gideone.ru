import '@/locales';
// import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { HeaderLarge } from './components/HeaderLarge';
import { TabletHeader } from './components/TabletHeader';
import { Banner } from './components/Banner';
import Tasks from './components/Tasks';
import Marquee from 'react-fast-marquee';
import { AnalyticsSales } from './components/AnalyticsSales';
import Sales from './components/Sales';
import Analytics from './components/Analytics';
import ForWho from './components/ForWho';
import Try from './components/Try';
import Decisions from './components/Decisions';
import HowGideoneWorks from './components/HowGideoneWorks';
import { ButtonToTop } from './components/ButtonToTop';
import Footer from './components/Footer';
import { CookieAgreement } from './components/CookieAgreement';
import News from './components/News';
import Consultation from './components/Consultation';
import FAQ from './components/FAQ';
import Subscriptions from './components/Subscriptions';
import Possibilities from './components/Possibilities';
import { StartUsing } from './components/StartUsing';
import { useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
// import { useLocation } from 'react-router-dom';
function App() {
  // const wi = useLocation();
  // console.log(window.location);
  const { i18n } = useTranslation();
  // const [locale, setLocale] = useState('ru');

  useLayoutEffect(() => {
    if (!window) return;

    const pathLocale = window.location.pathname.split('/')[1];
    i18n.changeLanguage(pathLocale);
    // setLocale(pathLocale);
  }, []);

  return (
    <>
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
        <HowGideoneWorks />
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
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

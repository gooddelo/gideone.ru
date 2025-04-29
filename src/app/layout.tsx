import type { Metadata, Viewport } from 'next';
import './globals.scss';
import Footer from '@/components/Footer/Footer';
import { Locales } from '@/i18n/i18nConfig';
import ServiceWorkerRegister from '@/components/Widgets/ServiceWorkerRegister/ServiceWorkerRegister';
import {
  HeaderLarge,
  TabletHeader,
  Header,
  CookieAgreement,
  ButtonToTop,
} from '@/components/Widgets';

export const metadata: Metadata = {
  title: 'Gideone',
  description: 'Business trainer',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: Locales }>;
}>) {
  const { locale } = await params;

  // console.log('params =============================> ' + locale);
  return (
    <html lang={locale}>
      <body data-theme='dark' id='root'>
        <Header locale={locale} />
        <HeaderLarge locale={locale} />
        <TabletHeader locale={locale} />
        {children}
        <ServiceWorkerRegister />
        <CookieAgreement />
        <Footer locale={locale} />
        <ButtonToTop />
      </body>
    </html>
  );
}

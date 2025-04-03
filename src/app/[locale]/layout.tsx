import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.scss';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { Locales } from '@/i18n/i18nConfig';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gideone',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locales };
}>) {
  const { locale } = await params;
  return (
    <html lang={locale}>
      <body data-theme='dark' className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header locale={locale} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}

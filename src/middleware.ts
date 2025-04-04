// import { i18nRouter } from 'next-i18n-router';
// import i18nConfig from '@/i18n/i18nConfig';
// import { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   return i18nRouter(request, i18nConfig);
// }

// // applies this middleware only to files in the app directory
// export const config = {
//   matcher: '/((?!api|static|.*\\..*|_next).*)',
// };

import { i18nRouter } from 'next-i18n-router';
import i18nConfig from '@/i18n/i18nConfig';
import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = i18nConfig.locales;

// Map of country codes to locales
const languageToLocale: Record<string, string> = {
  ru: 'ru', // Russia
  by: 'ru', // Belarus
  ua: 'ru', // Ukraine
  kz: 'ru', // Kazakhstan
  // fr: 'fr', // France
  // be: 'fr', // Belgium
  // ca: 'fr', // Canada (French-speaking regions)
  // Add other countries that should use French
  // Default to English for all other countries
};

export function middleware(request: NextRequest) {
  // 1. Check for explicit locale cookie first (user override)
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value as 'en' | 'ru';
  if (cookieLocale && supportedLocales.includes(cookieLocale)) {
    return i18nRouter(request, i18nConfig);
  }

  // 2. Parse Accept-Language header and sort by priority (q-value)
  const acceptLanguage = request.headers.get('accept-language');
  let detectedLocale = i18nConfig.defaultLocale; // fallback

  if (acceptLanguage) {
    const parsedLanguages = acceptLanguage
      .split(',')
      .map((lang) => {
        const [language, q] = lang.trim().split(';q=');
        return {
          lang: language.toLowerCase(),
          q: q ? parseFloat(q) : 1.0, // q defaults to 1.0
        };
      })
      .sort((a, b) => b.q - a.q); // highest q first

    // 3. Find the first matching supported locale
    for (const { lang } of parsedLanguages) {
      // Check full language code (e.g. 'fr-CA')
      if (supportedLocales.includes(lang)) {
        detectedLocale = lang;
        break;
      }

      // Check base language (e.g. 'fr' from 'fr-CA')
      const baseLang = lang.split('-')[0];
      if (languageToLocale[baseLang]) {
        detectedLocale = languageToLocale[baseLang];
        break;
      }
    }
  }

  // 4. Handle redirect if no locale in path
  const pathLocale = request.nextUrl.pathname.split('/')[1];
  const hasLocale = supportedLocales.includes(pathLocale);

  if (!hasLocale) {
    const newUrl = new URL(`/${detectedLocale}${request.nextUrl.pathname}`, request.url);
    const response = NextResponse.redirect(newUrl);

    // Optionally set cookie for consistency (auto-detected locale)
    response.cookies.set('NEXT_LOCALE', detectedLocale, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    });

    return response;
  }

  // 5. Proceed with normal i18n routing
  return i18nRouter(request, i18nConfig);
}

export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)',
};

import { NextRequest, NextResponse } from 'next/server';

const supported = ['ru', 'en'];

export function middleware(request: NextRequest) {
  // console.log('🔥 Middleware triggered');
  const languages = request.headers.get('accept-language')?.split(',') || [];
  const parsed = languages.map((lang) => lang.split(';')[0].trim());
  // console.log('Accept-Language:', languages);
  // console.log(
  //   'Parsed languages:',
  //   languages.map((lang) => lang.split(';')[0].trim())
  // );

  let chosen: string = 'ru';

  for (const lang of parsed) {
    if (supported.includes(lang)) {
      chosen = lang;
      break;
    }
  }

  return NextResponse.redirect(new URL(`/${chosen}`, request.url));
}

export const config = {
  matcher: '/',
};

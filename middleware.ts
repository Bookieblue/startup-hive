'use client';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { HIVE_ACCESS_TOKEN } from '@/lib/core/constant';

const authRoutes = [
  '/login',
  '/signup',
  '/password/forgot',
  '/password/reset',
  '/password/verify-otp',
  '/account-confirmation',
];

export function middleware(request: NextRequest) {
  let hiveAccessToken = request.cookies.get(HIVE_ACCESS_TOKEN);
  const token = hiveAccessToken?.value || '';

  if (authRoutes.includes(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  if (token) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL('/login', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [],
};

import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import {
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from './routes';
import { AuthCookie } from './types';

export function middleware(req: NextRequest) {
  const authCookie = cookies().get('auth');
  const { nextUrl } = req;

  const isLoggedIn = !!authCookie;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.some((path) => {
    if (path === nextUrl.pathname) return true;
    // Jika ada pathname dinamis
    if (path.includes('/:path')) {
      const pathParts = path.split('/');
      const nextUrlParts = nextUrl.pathname.split('/');
      if (pathParts.length === nextUrlParts.length) {
        for (let i = 0; i < pathParts.length; i++) {
          if (pathParts[i] === ':path') {
            continue;
          }
          if (pathParts[i] !== nextUrlParts[i]) {
            return false;
          }
        }
        return true;
      }
    }
    return false;
  });

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      const user = JSON.parse(authCookie.value) as AuthCookie;
      return Response.redirect(new URL(user.role === 'USER' ? '/dashboard' : '/management', nextUrl))
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    return Response.redirect(new URL(
      `/auth/login?callbackUrl=${encodedCallbackUrl}`,
      nextUrl
    ));
  }

  if (isLoggedIn) {
    const user = JSON.parse(authCookie!.value) as AuthCookie;

    if (user.role === 'USER' && nextUrl.pathname.includes('/management')) {
      return Response.redirect(new URL('/dashboard', nextUrl))
    }
  }

  return;
}

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
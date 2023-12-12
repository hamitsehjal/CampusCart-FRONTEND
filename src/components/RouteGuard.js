'use client';
/**End Goal:   Redirect to '/login' route if unauthenticated
 *
 * - Check if the current page is a public or private page
 * - if public, give them access
 * - else private:
 *  - Check if user is logged in
 *      - If yes, give them access
 *      - else, redirect to '/login' page
 *
 * Logic:
 *  1. Maintain a list of public routes such as (/login,/,/user-register,/partner-register)
 *  2. Ability to check the current(requested) URL and compare it against the above list of public routes
 *  3. Check to see if the User is authenticated or not
 *  4. Redirect to '/login' if authenticated, otherwise render 'props.children'
 */

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { isAuthenticated, isStoreAuthenticated } from 'lib/authenticate';
const PUBLIC_ROUTES = [
  '/',
  '/login',
  '/user-register',
  '/partner-register',
  '/confirm-partner',
  '/stores',
  '/cart',
  '/dashboard',
];
export default function RouteGuard(props) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    // on initial Load - run `authCheck`
    authCheck(router.pathname);

    // on route change complete - run `authCheck`
    // `routeChangeComplete` is a part of NextJs's Router events system. It automatically
    // provides a URL as a parameter to the callback function when the event is triggered
    router.events.on('routeChangeComplete', authCheck);

    // unsubscribe from events in the return function of useEffect
    return () => {
      router.events.off('routeChangeComplete', authCheck);
    };
  });

  // authCheck()
  function authCheck(url) {
    const path = url.split('?')[0];
    console.log(path);
    if (!PUBLIC_ROUTES.includes(path)) {
      if (path.startsWith('/dashboard/')) {
        // trying to access store Dashboard
        console.log(`Trying to access a STORE DASHBOARD : ${path}`);
        if (!isStoreAuthenticated()) {
          setAuthorized(false);
          router.push('/dashboard');
        } else {
          return setAuthorized(true);
        }
      } else {
        // Shopper workflow
        if (!isAuthenticated()) {
          console.log(`Trying to access a SECURED ROUTE: ${path}`);

          setAuthorized(false);
          router.push('/login');
        } else {
          return setAuthorized(true);
        }
      }
    } else {
      return setAuthorized(true);
    }
  }
  return <>{authorized && props.children}</>;
}

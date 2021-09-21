import type { PartialRouteObject } from 'react-router-dom';

import GuestGuard from '../../routes/guestGuard';
import { Login, Onboarding } from './pages';

export default {
  path: 'authentication',
  element: <GuestGuard />,
  children: [
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'onboarding',
      element: <Onboarding />,
    },
  ],
} as PartialRouteObject;

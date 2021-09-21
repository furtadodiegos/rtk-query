import type { PartialRouteObject } from 'react-router-dom';

import AuthGuard from '../../routes/authGuard';
import List from './components/list';

export default {
  path: 'dashboard',
  element: <AuthGuard />,
  children: [
    {
      path: '/',
      element: <List />,
    },
  ],
} as PartialRouteObject;

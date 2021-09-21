import React from 'react';
import type { PartialRouteObject } from 'react-router-dom';

import MainLayout from '../../../routes/mainLayout';

import Home from './home';
import NotFound from './notFound';

export default {
  path: '*',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ],
} as PartialRouteObject;

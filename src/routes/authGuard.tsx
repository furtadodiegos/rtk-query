import { useState } from 'react';
import { Navigate, useLocation, Outlet } from 'react-router-dom';

import type { FC } from 'react';

import useAuth from '../app/common/hooks/useAuth';
import Login from '../app/auth/pages/login';

const AuthGuard: FC = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  const [requestedLocation, setRequestedLocation] = useState<string>('');

  if (!isAuthenticated) {
    if (location.pathname !== requestedLocation) setRequestedLocation(location.pathname);

    return <Login />;
  }

  if (requestedLocation && location.pathname !== requestedLocation) {
    setRequestedLocation('');

    return <Navigate to={requestedLocation} />;
  }

  return <Outlet />;
};

export default AuthGuard;

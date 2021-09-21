import { Navigate, Outlet } from 'react-router-dom';

import type { FC } from 'react';

import useAuth from '../app/common/hooks/useAuth';

const GuestGuard: FC = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/dashboard" />;

  return <Outlet />;
};

export default GuestGuard;

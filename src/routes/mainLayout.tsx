import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: FC = ({ children }) => {
  return <div>{children || <Outlet />}</div>;
};

export default MainLayout;

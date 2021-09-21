import type { FC } from 'react';
import { useRoutes } from 'react-router';
import { ToastContainer } from 'react-toastify';

import SplashScreen from './common/components/splashScreen';
import useAuth from './common/hooks/useAuth';
import routes from '../routes';

const App: FC = () => {
  const content = useRoutes(routes);
  const { isInitialized } = useAuth();

  return isInitialized ? (
    <div>
      {content}

      <ToastContainer />
    </div>
  ) : (
    <SplashScreen />
  );
};

export default App;

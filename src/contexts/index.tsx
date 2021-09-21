import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import type { FC } from 'react';

import { AuthProvider } from './auth';
import { store } from '../store';

const Contexts: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>{children}</AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default Contexts;

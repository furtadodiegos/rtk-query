import { createContext, useState, useEffect } from 'react';
import type { FC } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '../app/auth/store/slice';

export interface AuthProps {
  isInitialized: boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext({} as AuthProps);

const AuthProvider: FC = ({ children }) => {
  const [isInitialized, setisInitialized] = useState(true);
  const [isAuthenticated, setisAuthenticated] = useState(false);

  const { user } = useSelector(selectAuth);

  useEffect(() => {
    setisAuthenticated(Boolean(user?.uuid));
  }, [user]);

  return <AuthContext.Provider value={{ isInitialized, isAuthenticated }}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };

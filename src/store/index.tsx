import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import type { ConfigureStoreOptions } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';

import carsApi from '../app/cars/api';
import authApi from '../app/auth/api';

import auth from '../app/auth/store/slice';
import cars from '../app/cars/store/slice';

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      [carsApi.reducerPath]: carsApi.reducer,
      auth,
      cars,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, carsApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

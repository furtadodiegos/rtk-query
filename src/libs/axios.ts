import axios from 'axios';

import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { SerializedError } from '@reduxjs/toolkit';

interface AxiosBaseQueryProps {
  url: string;
  method: AxiosRequestConfig['method'];
  data?: AxiosRequestConfig['data'];
}

export type BaseQueryFnProps = BaseQueryFn<AxiosBaseQueryProps, unknown, SerializedError>;

const axiosApiInstance = axios.create();

const defaultHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const publicRoutes = ['auth/sigin', 'auth/signup', 'auth/refresh'];

const getStoredToken = () => 'myAccessToken';

const handleHeaders = (url: string) =>
  publicRoutes.indexOf(url) >= 0 ? defaultHeaders : { ...defaultHeaders, Authorization: `Bearer ${getStoredToken()}` };

const handleErrorObject = (error: AxiosError) =>
  error.response ? error : { response: { status: 500, data: 'We got a internal error, please try again later.' } };

axiosApiInstance.interceptors.request.use(
  async (config) => ({
    ...config,
    baseURL: 'http://localhost:5000',
    headers: handleHeaders(config.url ?? ''),
  }),
  (error) => Promise.reject(error),
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log(`ResponseError: ${JSON.stringify(error.response?.data ?? error.response, undefined, 2)}`);

    return Promise.reject(handleErrorObject(error));
  },
);

export const axiosBaseQuery = (): BaseQueryFnProps => async (props) => {
  try {
    const result: AxiosResponse = await axiosApiInstance({ ...props });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;

    return {
      error: {
        code: err.response?.status.toString(),
        message: typeof err.response?.data === 'string' ? err.response?.data : err.response?.data[1],
        name: typeof err.response?.data !== 'string' ? err.response?.data[0] : undefined,
      },
    };
  }
};

export default axiosApiInstance;

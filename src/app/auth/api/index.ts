import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../../../libs/axios';

import type { LoginRequest } from '../types/requests';
import type { User } from '../types/models';

export default createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'authApi',
  endpoints: (build) => ({
    onLogin: build.mutation<User, LoginRequest>({
      query: (data) => ({ url: 'login', method: 'post', data }),
    }),
  }),
});

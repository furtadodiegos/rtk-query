import { createApi } from '@reduxjs/toolkit/query/react';

import { axiosBaseQuery } from '../../../libs/axios';

import type { Car } from '../types/models';

export default createApi({
  baseQuery: axiosBaseQuery(),
  reducerPath: 'carsApi',
  endpoints: (build) => ({
    getAllCars: build.query<Car[], void>({
      query: () => ({ url: 'models', method: 'get' }),
    }),
  }),
});

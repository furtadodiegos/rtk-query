import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '../../../store';
import type { Car } from '../types/models';

import api from '../api';

const slice = createSlice({
  name: 'cars',
  initialState: [] as Car[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.getAllCars.matchFulfilled, (state, { payload }) => payload);
  },
});

export default slice.reducer;

export const selectCars = ({ cars }: RootState) => cars;

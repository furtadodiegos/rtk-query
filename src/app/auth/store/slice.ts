import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../../store';

import api from '../api';
import initialState from '../services/initialState';

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = [...state.favorites, action.payload];
    },
    onRemoveFavorite: (state, { payload }: PayloadAction<string>) => {
      state.favorites = state.favorites.filter((f) => f !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.onLogin.matchFulfilled, (state, { payload }) => ({ ...state, user: payload }));
  },
});

export default slice.reducer;

export const selectAuth = ({ auth }: RootState) => auth;
export const { onFavorite, onRemoveFavorite } = slice.actions;

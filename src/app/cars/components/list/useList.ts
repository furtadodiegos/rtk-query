import { useCallback, useEffect } from 'react';

import { useTypedSelector, useAppDispatch } from '../../../../store';
import carsApi from '../../api';
import { selectCars } from '../../store/slice';
import { selectAuth, onFavorite, onRemoveFavorite } from '../../../auth/store/slice';

const useList = () => {
  const { useLazyGetAllCarsQuery } = carsApi;
  const [getAllCars, { isLoading }] = useLazyGetAllCarsQuery();
  const dispatch = useAppDispatch();

  const cars = useTypedSelector(selectCars);
  const { favorites } = useTypedSelector(selectAuth);

  const favorite = useCallback((modelId: string) => {
    dispatch(onFavorite(modelId));
  }, []);

  const removeFavorite = useCallback((modelId: string) => {
    dispatch(onRemoveFavorite(modelId));
  }, []);

  useEffect(() => {
    getAllCars();
  }, []);

  return { cars, isLoading, favorite, removeFavorite, favorites };
};

export default useList;

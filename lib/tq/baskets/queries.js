import { useQuery } from '@tanstack/react-query';
import { fetchBaskets, fetchUserBasket } from './api';
import {USER_BASKET_STORAGE_KEY, STORAGE_KEY} from './settings';

export const useBaskets = ({
  onSuccess = () => {},
  onErrror = (err) => {
    console.log(err);
  },
} = {}) =>
  useQuery({
    suspense: true,
    queryKey: [STORAGE_KEY],
    queryFn: fetchBaskets,
    onSuccess,
    onErrror,
  });

export const useUserBasket = ({
  onSuccess = () => {},
  onErrror = (err) => {
    console.log(err);
  },
} = {}) =>
  useQuery({
    suspense: true,
    queryKey: [USER_BASKET_STORAGE_KEY],
    queryFn: fetchUserBasket,
    onSuccess,
    onErrror,
  });

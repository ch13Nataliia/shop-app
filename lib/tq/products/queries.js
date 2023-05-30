import { useQuery } from '@tanstack/react-query';
import { fetchProducts, fetchProduct } from './api';
import { STORAGE_KEY } from './setting';

export const useProducts = ({
  onSuccess = () => {},
  onErrror = (err) => {
    console.log(err);
  },
} = {}) =>
  useQuery({
    suspense: true,
    queryKey: [STORAGE_KEY],
    queryFn: fetchProducts,
    onSuccess,
    onErrror,
  });

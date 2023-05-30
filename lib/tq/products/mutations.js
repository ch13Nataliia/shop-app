import {
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import { deleteProduct, updateProduct, addProduct } from './api';
import { STORAGE_KEY } from './setting';

export const useAdd = () => {
  const queruClient = useQueryClient();
  return useMutation({
    mutationFn: addProduct,
    onSuccess: () => {
      queruClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};

export const useUpdate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};

export const useDelete = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [STORAGE_KEY] });
    },
  });
};

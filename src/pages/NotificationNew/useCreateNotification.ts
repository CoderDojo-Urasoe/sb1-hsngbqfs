import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createNotification } from '../../services/notifications';
import { Notification } from '../../types';

export function useCreateNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNotification,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
}
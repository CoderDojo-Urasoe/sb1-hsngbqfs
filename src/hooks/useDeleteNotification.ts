import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteNotification as deleteNotificationApi } from '../services/notifications';

export function useDeleteNotification() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNotificationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
}
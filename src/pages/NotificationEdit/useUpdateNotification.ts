import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNotification } from '../../services/notifications';
import { Notification } from '../../types';

export function useUpdateNotification(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Notification, 'id' | 'createdAt'>) =>
      updateNotification(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications', id] });
    },
  });
}
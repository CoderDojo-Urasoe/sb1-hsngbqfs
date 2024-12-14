import { useQuery } from '@tanstack/react-query';
import { getNotification } from '../../services/notifications';

export function useNotification(id: string) {
  return useQuery({
    queryKey: ['notifications', id],
    queryFn: () => getNotification(id),
  });
}
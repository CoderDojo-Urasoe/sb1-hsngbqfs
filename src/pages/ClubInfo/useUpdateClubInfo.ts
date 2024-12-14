import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateClubInfo } from '../../services/clubInfo';

export function useUpdateClubInfo() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateClubInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['clubInfo'] });
    },
  });
}
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMember } from '../../services/members';

export function useDeleteMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
    },
  });
}
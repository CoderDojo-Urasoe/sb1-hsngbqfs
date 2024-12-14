import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createMember } from '../../services/members';

export function useCreateMember() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
    },
  });
}
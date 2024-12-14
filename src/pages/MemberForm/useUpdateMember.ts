import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateMember } from '../../services/members';
import { Member } from '../../types';

export function useUpdateMember(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: Omit<Member, 'id'>) => updateMember(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['members'] });
      queryClient.invalidateQueries({ queryKey: ['members', id] });
    },
  });
}
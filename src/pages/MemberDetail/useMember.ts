import { useQuery } from '@tanstack/react-query';
import { getMember } from '../../services/members';

export function useMember(id: string) {
  return useQuery({
    queryKey: ['members', id],
    queryFn: () => getMember(id),
  });
}
import { useQuery } from '@tanstack/react-query';
import { getMembers } from '../../services/members';

export function useMembers() {
  return useQuery({
    queryKey: ['members'],
    queryFn: getMembers,
  });
}
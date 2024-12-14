import { useQuery } from '@tanstack/react-query';
import { getClubInfo } from '../../services/clubInfo';

export function useClubInfo() {
  return useQuery({
    queryKey: ['clubInfo'],
    queryFn: getClubInfo,
  });
}
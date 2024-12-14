import { useQuery } from '@tanstack/react-query';
import { getSurveyNotifications } from '../../services/surveys';

export function useSurveyNotifications() {
  return useQuery({
    queryKey: ['notifications', 'surveys'],
    queryFn: getSurveyNotifications,
  });
}
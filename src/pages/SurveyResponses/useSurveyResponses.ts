import { useQuery } from '@tanstack/react-query';
import { getSurveyResponses } from '../../services/surveys';

export function useSurveyResponses(notificationId: string) {
  return useQuery({
    queryKey: ['surveys', notificationId, 'responses'],
    queryFn: () => getSurveyResponses(notificationId),
  });
}
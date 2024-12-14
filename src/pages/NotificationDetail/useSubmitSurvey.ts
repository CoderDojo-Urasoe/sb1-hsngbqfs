import { useMutation, useQueryClient } from '@tanstack/react-query';
import { submitSurveyResponse } from '../../services/notifications';

export function useSubmitSurvey() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitSurveyResponse,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
    },
  });
}
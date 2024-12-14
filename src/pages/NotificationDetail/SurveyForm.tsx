import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useSubmitSurvey } from './useSubmitSurvey';

interface SurveyFormProps {
  notificationId: string;
}

export function SurveyForm({ notificationId }: SurveyFormProps) {
  const navigate = useNavigate();
  const [attending, setAttending] = useState(false);
  const [comment, setComment] = useState('');
  const { mutate: submitSurvey, isLoading } = useSubmitSurvey();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitSurvey(
      {
        notificationId,
        attending,
        comment: comment.trim() || undefined,
      },
      {
        onSuccess: () => {
          alert('回答が完了しました。');
          navigate('/');
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6">
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={attending}
              onChange={(e) => setAttending(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span>出席する場合はチェックを入れて下さい。</span>
          </label>
        </div>

        <div>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="※メイクアップ（MU）の方、その他コメントしたい方は入力して下さい。"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            rows={3}
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          回答（変更）する
        </Button>
      </div>
    </form>
  );
}
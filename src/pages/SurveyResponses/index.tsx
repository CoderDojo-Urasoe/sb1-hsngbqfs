import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useSurveyResponses } from './useSurveyResponses';
import { ResponseList } from './ResponseList';
import { Spinner } from '../../components/ui/Spinner';

export default function SurveyResponses() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data, isLoading, error } = useSurveyResponses(id!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !data) {
    return (
      <div className="text-red-600">
        回答結果の読み込みに失敗しました。
      </div>
    );
  }

  const { notification, responses } = data;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">参加可否回答結果</h1>
        <Button
          variant="outline"
          onClick={() => navigate('/surveys')}
        >
          戻る
        </Button>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{notification.title}</h2>
        <p className="text-gray-600">{notification.content}</p>
      </div>

      <ResponseList responses={responses} />
    </div>
  );
}
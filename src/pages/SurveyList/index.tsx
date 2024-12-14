import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useSurveyNotifications } from './useSurveyNotifications';
import { SurveyItem } from './SurveyItem';
import { Spinner } from '../../components/ui/Spinner';

export default function SurveyList() {
  const navigate = useNavigate();
  const { data: notifications, isLoading, error } = useSurveyNotifications();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-red-600">
        参加可否回答リストの読み込みに失敗しました。
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">参加可否回答リスト</h1>
        <Button
          variant="outline"
          onClick={() => navigate('/')}
        >
          戻る
        </Button>
      </div>

      <div className="space-y-4">
        {notifications?.map((notification) => (
          <SurveyItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
}
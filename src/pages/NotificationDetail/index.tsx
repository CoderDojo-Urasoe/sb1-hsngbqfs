import { useParams } from 'react-router-dom';
import { useNotification } from './useNotification';
import { NotificationView } from './NotificationView';
import { SurveyForm } from './SurveyForm';
import { Spinner } from '../../components/ui/Spinner';

export default function NotificationDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: notification, isLoading, error } = useNotification(id!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !notification) {
    return (
      <div className="text-red-600">
        お知らせの読み込みに失敗しました。
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <NotificationView notification={notification} />
      {notification.type === 'survey' && (
        <SurveyForm notificationId={notification.id} />
      )}
    </div>
  );
}
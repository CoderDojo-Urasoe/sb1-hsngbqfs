import { useParams, useNavigate } from 'react-router-dom';
import { NotificationForm } from '../shared/NotificationForm';
import { useNotification } from '../NotificationDetail/useNotification';
import { useUpdateNotification } from './useUpdateNotification';
import { Spinner } from '../../components/ui/Spinner';
import { Notification } from '../../types';

export default function NotificationEdit() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: notification, isLoading: isLoadingNotification } = useNotification(id!);
  const { mutate: updateNotification, isLoading: isUpdating } = useUpdateNotification(id!);

  if (isLoadingNotification) {
    return <Spinner />;
  }

  if (!notification) {
    return (
      <div className="text-red-600">
        お知らせの読み込みに失敗しました。
      </div>
    );
  }

  const handleSubmit = (data: Omit<Notification, 'id' | 'createdAt'>) => {
    updateNotification(data, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">お知らせ（変更・更新）</h1>
      <NotificationForm
        notification={notification}
        onSubmit={handleSubmit}
        isLoading={isUpdating}
      />
    </div>
  );
}
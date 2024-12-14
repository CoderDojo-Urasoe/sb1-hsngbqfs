import { useNotifications } from '../../hooks/useNotifications';
import { NotificationItem } from './NotificationItem';
import { Spinner } from '../../components/ui/Spinner';

export function NotificationList() {
  const { data: notifications, isLoading, error } = useNotifications();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-red-600">
        お知らせの読み込みに失敗しました。
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">お知らせ</h2>
      <div className="space-y-4">
        {notifications?.map((notification) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
          />
        ))}
      </div>
    </div>
  );
}
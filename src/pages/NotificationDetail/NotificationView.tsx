import { Notification } from '../../types';
import { formatDate } from '../../utils/date';

interface NotificationViewProps {
  notification: Notification;
}

export function NotificationView({ notification }: NotificationViewProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-2">{notification.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {formatDate(notification.createdAt)}
      </p>
      <div className="prose max-w-none">
        {notification.content}
      </div>
    </div>
  );
}
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAuthStore } from '../../store/auth';
import { Notification } from '../../types';
import { useDeleteNotification } from '../../hooks/useDeleteNotification';
import { formatDate } from '../../utils/date';

interface NotificationItemProps {
  notification: Notification;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const { mutate: deleteNotification } = useDeleteNotification();
  const isAdminOrEditor = user?.role === 'admin' || user?.role === 'editor';

  const handleDelete = async () => {
    if (window.confirm('このお知らせを削除しますか？')) {
      deleteNotification(notification.id);
    }
  };

  const handleEdit = () => {
    navigate(`/notifications/${notification.id}/edit`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-start">
        <div 
          className="flex-1 cursor-pointer"
          onClick={() => navigate(`/notifications/${notification.id}`)}
        >
          <h3 className="font-medium">{notification.title}</h3>
          <p className="text-sm text-gray-500">
            {formatDate(notification.createdAt)}
          </p>
        </div>
        
        {isAdminOrEditor && (
          <div className="flex gap-2">
            <Button
              variant="outline"
              className="p-2"
              onClick={handleEdit}
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="p-2 text-red-600 hover:text-red-700"
              onClick={handleDelete}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
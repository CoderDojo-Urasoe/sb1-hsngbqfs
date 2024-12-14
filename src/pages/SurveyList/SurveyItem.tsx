import { useNavigate } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Notification } from '../../types';
import { formatDate } from '../../utils/date';

interface SurveyItemProps {
  notification: Notification;
}

export function SurveyItem({ notification }: SurveyItemProps) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{notification.title}</h3>
          <p className="text-sm text-gray-500">
            {formatDate(notification.createdAt)}
          </p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => navigate(`/surveys/${notification.id}/responses`)}
        >
          <ClipboardList className="h-4 w-4" />
          <span>回答結果</span>
        </Button>
      </div>
    </div>
  );
}
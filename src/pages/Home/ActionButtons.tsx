import { useNavigate } from 'react-router-dom';
import { Users, Bell, ClipboardList } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useAuthStore } from '../../store/auth';

export function ActionButtons() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const isAdminOrEditor = user?.role === 'admin' || user?.role === 'editor';

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 p-4"
        onClick={() => navigate('/members')}
      >
        <Users className="h-5 w-5" />
        <span>会員名簿</span>
      </Button>

      {isAdminOrEditor && (
        <>
          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 p-4"
            onClick={() => navigate('/users')}
          >
            <Users className="h-5 w-5" />
            <span>ユーザーリスト</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 p-4"
            onClick={() => navigate('/notifications/new')}
          >
            <Bell className="h-5 w-5" />
            <span>お知らせ追加</span>
          </Button>

          <Button
            variant="outline"
            className="flex items-center justify-center gap-2 p-4"
            onClick={() => navigate('/surveys')}
          >
            <ClipboardList className="h-5 w-5" />
            <span>参加可否回答リスト</span>
          </Button>
        </>
      )}
    </div>
  );
}
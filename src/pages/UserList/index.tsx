import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { SearchBar } from './SearchBar';
import { UserTable } from './UserTable';
import { useAuthStore } from '../../store/auth';

export default function UserList() {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);

  if (user?.role !== 'admin') {
    return (
      <div className="text-red-600">
        このページにアクセスする権限がありません。
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">ユーザー一覧</h1>
        <Button
          onClick={() => navigate('/users/new')}
          className="flex items-center gap-2"
        >
          <UserPlus className="h-4 w-4" />
          <span>新規追加</span>
        </Button>
      </div>

      <SearchBar />
      <UserTable />
    </div>
  );
}
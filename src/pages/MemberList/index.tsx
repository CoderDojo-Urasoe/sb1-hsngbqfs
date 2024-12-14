import { useAuthStore } from '../../store/auth';
import { SearchBar } from './SearchBar';
import { MemberListView } from './MemberListView';
import { AddMemberButton } from './AddMemberButton';

export default function MemberList() {
  const user = useAuthStore((state) => state.user);
  const isAdminOrEditor = user?.role === 'admin' || user?.role === 'editor';

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">会員名簿</h1>
        {isAdminOrEditor && <AddMemberButton />}
      </div>

      <SearchBar />
      <MemberListView />
    </div>
  );
}
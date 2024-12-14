import { useMembers } from './useMembers';
import { MemberCard } from './MemberCard';
import { Spinner } from '../../components/ui/Spinner';
import { useSearchStore } from './searchStore';

export function MemberListView() {
  const { data: members, isLoading, error } = useMembers();
  const { searchQuery } = useSearchStore();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="text-red-600">
        会員情報の読み込みに失敗しました。
      </div>
    );
  }

  const filteredMembers = members?.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredMembers?.map((member) => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}
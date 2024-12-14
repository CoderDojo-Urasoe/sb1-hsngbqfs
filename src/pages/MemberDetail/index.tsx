import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { useMember } from './useMember';
import { MemberInfo } from './MemberInfo';
import { Spinner } from '../../components/ui/Spinner';

export default function MemberDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: member, isLoading, error } = useMember(id!);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !member) {
    return (
      <div className="text-red-600">
        会員情報の読み込みに失敗しました。
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{member.name}</h1>
        <Button
          variant="outline"
          onClick={() => navigate('/members')}
        >
          戻る
        </Button>
      </div>

      <MemberInfo member={member} />
    </div>
  );
}
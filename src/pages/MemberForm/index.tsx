import { useParams, useNavigate } from 'react-router-dom';
import { MemberFormContent } from './MemberFormContent';
import { useMember } from '../MemberDetail/useMember';
import { useCreateMember } from './useCreateMember';
import { useUpdateMember } from './useUpdateMember';
import { Member } from '../../types';
import { Spinner } from '../../components/ui/Spinner';

export default function MemberForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: member, isLoading: isLoadingMember } = useMember(id!);
  const { mutate: createMember, isLoading: isCreating } = useCreateMember();
  const { mutate: updateMember, isLoading: isUpdating } = useUpdateMember(id!);

  const isLoading = isLoadingMember || isCreating || isUpdating;

  if (id && isLoadingMember) {
    return <Spinner />;
  }

  const handleSubmit = (data: Omit<Member, 'id'>) => {
    if (id) {
      updateMember(data, {
        onSuccess: () => navigate('/members'),
      });
    } else {
      createMember(data, {
        onSuccess: () => navigate('/members'),
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">
        {id ? '会員情報（変更・更新）' : '新規会員情報'}
      </h1>
      <MemberFormContent
        member={member}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
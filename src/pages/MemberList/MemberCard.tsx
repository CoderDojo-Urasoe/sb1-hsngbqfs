import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2 } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { Member } from '../../types';
import { useAuthStore } from '../../store/auth';
import { useDeleteMember } from './useDeleteMember';

interface MemberCardProps {
  member: Member;
}

export function MemberCard({ member }: MemberCardProps) {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const { mutate: deleteMember } = useDeleteMember();
  const isAdminOrEditor = user?.role === 'admin' || user?.role === 'editor';

  const handleDelete = async () => {
    if (window.confirm('この会員を削除しますか？')) {
      deleteMember(member.id);
    }
  };

  const handleEdit = () => {
    navigate(`/members/${member.id}/edit`);
  };

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <div 
        className="cursor-pointer"
        onClick={() => navigate(`/members/${member.id}`)}
      >
        <h3 className="font-medium">{member.name}</h3>
        <p className="text-sm text-gray-500">{member.company}</p>
        <p className="text-sm text-gray-500">{member.position}</p>
      </div>
      
      {isAdminOrEditor && (
        <div className="flex justify-end gap-2 mt-4">
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
  );
}
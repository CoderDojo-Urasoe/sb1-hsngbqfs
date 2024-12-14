import { useNavigate } from 'react-router-dom';
import { UserPlus } from 'lucide-react';
import { Button } from '../../components/ui/Button';

export function AddMemberButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/members/new');
  };

  return (
    <Button
      onClick={handleClick}
      className="flex items-center gap-2"
    >
      <UserPlus className="h-4 w-4" />
      <span>会員追加</span>
    </Button>
  );
}
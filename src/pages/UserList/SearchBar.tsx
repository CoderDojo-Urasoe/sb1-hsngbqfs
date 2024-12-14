import { useSearchStore } from './searchStore';
import { Input } from '../../components/ui/Input';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <div>
      <Input
        type="text"
        placeholder="ユーザー名で検索..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md"
      />
    </div>
  );
}
import { useSearchStore } from './searchStore';
import { Input } from '../../components/ui/Input';

export function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearchStore();

  return (
    <div>
      <Input
        type="text"
        placeholder="※会員名で探す"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="max-w-md"
      />
    </div>
  );
}
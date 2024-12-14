import { useState } from 'react';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';

interface LoginFormProps {
  onSubmit: (loginId: string, password: string) => void;
  error: string | null;
}

export function LoginForm({ onSubmit, error }: LoginFormProps) {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(loginId, password);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loginId" className="block text-sm font-medium text-gray-700">
          ログインID
        </label>
        <div className="mt-1">
          <Input
            id="loginId"
            name="loginId"
            type="text"
            required
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          パスワード
        </label>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <div className="text-red-600 text-sm">{error}</div>
      )}

      <Button type="submit" className="w-full">
        ログイン
      </Button>
    </form>
  );
}
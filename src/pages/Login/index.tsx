import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';
import { useAuthStore } from '../../store/auth';
import { LoginForm } from './LoginForm';
import { useLogin } from './useLogin';

export default function Login() {
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const { mutate: loginMutation } = useLogin();

  const handleLogin = async (loginId: string, password: string) => {
    try {
      loginMutation(
        { loginId, password },
        {
          onSuccess: (user) => {
            login(user);
            navigate('/', { replace: true });
          },
          onError: (error) => {
            setError('ログインIDまたはパスワードが正しくありません。');
          },
        }
      );
    } catch (err) {
      setError('ログインに失敗しました。');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="flex justify-center">
          <Crown className="w-20 h-20 text-blue-600" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          浦添てだこライオンズクラブ
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          会員専用アプリへようこそ
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <LoginForm onSubmit={handleLogin} error={error} />
        </div>
      </div>
    </div>
  );
}
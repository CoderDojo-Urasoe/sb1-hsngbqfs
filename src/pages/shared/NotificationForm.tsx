import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Notification } from '../../types';

interface NotificationFormProps {
  notification?: Notification;
  onSubmit: (data: Omit<Notification, 'id' | 'createdAt'>) => void;
  isLoading?: boolean;
}

export function NotificationForm({
  notification,
  onSubmit,
  isLoading,
}: NotificationFormProps) {
  const navigate = useNavigate();
  const [type, setType] = useState<Notification['type']>(
    notification?.type || 'announcement'
  );
  const [title, setTitle] = useState(notification?.title || '');
  const [content, setContent] = useState(notification?.content || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      type,
      title: title.trim(),
      content: content.trim(),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          お知らせの種類
        </label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value as Notification['type'])}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        >
          <option value="announcement">お知らせ</option>
          <option value="survey">参加可否</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          タイトル
        </label>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="mt-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          内容
        </label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          rows={6}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate(-1)}
        >
          戻る
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
        >
          {notification ? '更新' : '登録'}
        </Button>
      </div>
    </form>
  );
}
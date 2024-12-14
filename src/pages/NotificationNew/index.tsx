import { useNavigate } from 'react-router-dom';
import { NotificationForm } from '../shared/NotificationForm';
import { useCreateNotification } from './useCreateNotification';
import { Notification } from '../../types';

export default function NotificationNew() {
  const navigate = useNavigate();
  const { mutate: createNotification, isLoading } = useCreateNotification();

  const handleSubmit = (data: Omit<Notification, 'id' | 'createdAt'>) => {
    createNotification(data, {
      onSuccess: () => {
        navigate('/');
      },
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">お知らせ（新規）</h1>
      <NotificationForm onSubmit={handleSubmit} isLoading={isLoading} />
    </div>
  );
}
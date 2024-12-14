import { Notification, SurveyResponse } from '../types';
import { api } from '../utils/api';

// Mock data for development
const mockResponses: Record<string, SurveyResponse[]> = {
  '2': [
    {
      id: '1',
      memberId: '山田太郎',
      notificationId: '2',
      attending: true,
      comment: 'メイクアップ予定です',
      respondedAt: '2024-03-03T10:00:00Z',
    },
    {
      id: '2',
      memberId: '鈴木一郎',
      notificationId: '2',
      attending: false,
      comment: '出張のため欠席します',
      respondedAt: '2024-03-03T11:30:00Z',
    },
  ],
};

export async function getSurveyNotifications(): Promise<Notification[]> {
  // TODO: Replace with actual API call
  return (await import('./notifications')).getNotifications().then(
    notifications => notifications.filter(n => n.type === 'survey')
  );
}

export async function getSurveyResponses(notificationId: string) {
  // TODO: Replace with actual API call
  const notification = await (await import('./notifications')).getNotification(notificationId);
  const responses = mockResponses[notificationId] || [];
  return { notification, responses };
}
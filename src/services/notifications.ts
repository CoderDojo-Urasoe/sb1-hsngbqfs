import { Notification, SurveyResponse } from '../types';
import { api } from '../utils/api';

// Mock data for development
const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'announcement',
    title: '次回の例会について',
    content: '次回の例会は3月15日(金)に開催されます。',
    createdAt: '2024-03-01T09:00:00Z',
  },
  {
    id: '2',
    type: 'survey',
    title: '4月の清掃活動参加確認',
    content: '4月5日(土)に予定している清掃活動への参加可否をお知らせください。',
    createdAt: '2024-03-02T10:30:00Z',
    surveyResponses: [],
  },
];

export async function getNotifications(): Promise<Notification[]> {
  // TODO: Replace with actual API call
  return mockNotifications;
}

export async function getNotification(id: string): Promise<Notification> {
  // TODO: Replace with actual API call
  const notification = mockNotifications.find((n) => n.id === id);
  if (!notification) {
    throw new Error('Notification not found');
  }
  return notification;
}

export async function createNotification(
  data: Omit<Notification, 'id' | 'createdAt'>
): Promise<Notification> {
  // TODO: Replace with actual API call
  const notification: Notification = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
  };
  mockNotifications.push(notification);
  return notification;
}

export async function updateNotification(
  id: string,
  data: Omit<Notification, 'id' | 'createdAt'>
): Promise<Notification> {
  // TODO: Replace with actual API call
  const index = mockNotifications.findIndex((n) => n.id === id);
  if (index === -1) {
    throw new Error('Notification not found');
  }
  
  const updatedNotification: Notification = {
    ...mockNotifications[index],
    ...data,
  };
  mockNotifications[index] = updatedNotification;
  return updatedNotification;
}

export async function deleteNotification(id: string): Promise<void> {
  // TODO: Replace with actual API call
  const index = mockNotifications.findIndex((n) => n.id === id);
  if (index !== -1) {
    mockNotifications.splice(index, 1);
  }
}

interface SurveyResponseInput {
  notificationId: string;
  attending: boolean;
  comment?: string;
}

export async function submitSurveyResponse(input: SurveyResponseInput): Promise<SurveyResponse> {
  // TODO: Replace with actual API call
  const notification = mockNotifications.find((n) => n.id === input.notificationId);
  if (!notification || notification.type !== 'survey') {
    throw new Error('Invalid notification');
  }

  const response: SurveyResponse = {
    id: Math.random().toString(36).substr(2, 9),
    memberId: 'current-user', // In a real app, this would come from the authenticated user
    notificationId: input.notificationId,
    attending: input.attending,
    comment: input.comment,
    respondedAt: new Date().toISOString(),
  };

  if (!notification.surveyResponses) {
    notification.surveyResponses = [];
  }

  // Update existing response or add new one
  const existingIndex = notification.surveyResponses.findIndex(
    (r) => r.memberId === response.memberId
  );

  if (existingIndex !== -1) {
    notification.surveyResponses[existingIndex] = response;
  } else {
    notification.surveyResponses.push(response);
  }

  return response;
}
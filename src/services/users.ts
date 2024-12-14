import { User } from '../types';
import { api } from '../utils/api';

// Mock data for development
const mockUsers: User[] = [
  {
    id: '1',
    username: '管理者',
    loginId: 'admin',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2024-03-15T10:00:00Z',
  },
  {
    id: '2',
    username: '編集者',
    loginId: 'editor',
    role: 'editor',
    createdAt: '2024-01-02T00:00:00Z',
    lastLoginAt: '2024-03-14T15:30:00Z',
  },
  {
    id: '3',
    username: '閲覧者',
    loginId: 'viewer',
    role: 'viewer',
    createdAt: '2024-01-03T00:00:00Z',
    lastLoginAt: '2024-03-13T09:45:00Z',
  },
];

export async function getUsers(): Promise<User[]> {
  // TODO: Replace with actual API call
  return mockUsers;
}

export async function getUser(id: string): Promise<User> {
  // TODO: Replace with actual API call
  const user = mockUsers.find((u) => u.id === id);
  if (!user) {
    throw new Error('User not found');
  }
  return user;
}

export async function createUser(data: Omit<User, 'id' | 'createdAt' | 'lastLoginAt'>): Promise<User> {
  // TODO: Replace with actual API call
  const user: User = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    lastLoginAt: new Date().toISOString(),
  };
  mockUsers.push(user);
  return user;
}

export async function updateUser(
  id: string,
  data: Partial<Omit<User, 'id' | 'createdAt' | 'lastLoginAt'>>
): Promise<User> {
  // TODO: Replace with actual API call
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index === -1) {
    throw new Error('User not found');
  }
  
  const updatedUser: User = {
    ...mockUsers[index],
    ...data,
  };
  mockUsers[index] = updatedUser;
  return updatedUser;
}

export async function deleteUser(id: string): Promise<void> {
  // TODO: Replace with actual API call
  const index = mockUsers.findIndex((u) => u.id === id);
  if (index !== -1) {
    mockUsers.splice(index, 1);
  }
}
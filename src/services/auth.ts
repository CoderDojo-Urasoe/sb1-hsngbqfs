import { User } from '../types';
import { api } from '../utils/api';

interface LoginCredentials {
  loginId: string;
  password: string;
}

export async function loginUser(credentials: LoginCredentials): Promise<User> {
  // TODO: Replace with actual API call
  // This is a mock implementation for development
  if (credentials.loginId === 'admin' && credentials.password === 'password') {
    return {
      id: '1',
      username: '管理者',
      loginId: 'admin',
      role: 'admin',
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString(),
    };
  }
  throw new Error('Invalid credentials');
}
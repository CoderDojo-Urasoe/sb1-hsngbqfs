import { Member } from '../types';
import { api } from '../utils/api';

// Mock data for development
const mockMembers: Member[] = [
  {
    id: '1',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    name: '山田太郎',
    nameKana: 'ヤマダタロウ',
    company: '山田商事株式会社',
    position: '代表取締役',
    industry: '商社',
    postalCode: '900-0001',
    address: '沖縄県那覇市港町1-1-1',
    tel: '098-123-4567',
    fax: '098-123-4568',
    sponsor: '鈴木一郎',
    url: 'https://example.com',
    joinDate: '2020-04-01',
    memberNumber: 'M2020001',
  },
  {
    id: '2',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    name: '鈴木一郎',
    nameKana: 'スズキイチロウ',
    company: '鈴木建設株式会社',
    position: '専務取締役',
    industry: '建設',
    postalCode: '900-0002',
    address: '沖縄県那覇市曙2-2-2',
    tel: '098-234-5678',
    fax: '098-234-5679',
    sponsor: '田中三郎',
    url: 'https://example.net',
    joinDate: '2018-04-01',
    memberNumber: 'M2018001',
  },
];

export async function getMembers(): Promise<Member[]> {
  // TODO: Replace with actual API call
  return mockMembers;
}

export async function getMember(id: string): Promise<Member> {
  // TODO: Replace with actual API call
  const member = mockMembers.find((m) => m.id === id);
  if (!member) {
    throw new Error('Member not found');
  }
  return member;
}

export async function createMember(data: Omit<Member, 'id'>): Promise<Member> {
  // TODO: Replace with actual API call
  const member: Member = {
    ...data,
    id: Math.random().toString(36).substr(2, 9),
  };
  mockMembers.push(member);
  return member;
}

export async function updateMember(
  id: string,
  data: Omit<Member, 'id'>
): Promise<Member> {
  // TODO: Replace with actual API call
  const index = mockMembers.findIndex((m) => m.id === id);
  if (index === -1) {
    throw new Error('Member not found');
  }
  
  const updatedMember: Member = {
    ...data,
    id,
  };
  mockMembers[index] = updatedMember;
  return updatedMember;
}

export async function deleteMember(id: string): Promise<void> {
  // TODO: Replace with actual API call
  const index = mockMembers.findIndex((m) => m.id === id);
  if (index !== -1) {
    mockMembers.splice(index, 1);
  }
}
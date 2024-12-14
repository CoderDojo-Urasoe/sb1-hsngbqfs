import { ClubInfo } from '../types';
import { api } from '../utils/api';

// Mock data for development
let mockClubInfo: ClubInfo = {
  address: '沖縄県浦添市安波茶1-1-1',
  tel: '098-123-4567',
  fax: '098-123-4568',
  meetingDay: '第2・第4木曜日',
  secretary: '山田花子',
  foundingDate: '1980年4月1日',
  charterNight: '1980年5月1日',
  sponsorClub: '那覇ライオンズクラブ',
  clubNumber: 'LC-12345',
  affiliation: '336-D地区',
  organizationChart: '',
  annualSchedule: '',
};

export async function getClubInfo(): Promise<ClubInfo> {
  // TODO: Replace with actual API call
  return mockClubInfo;
}

export async function updateClubInfo(data: ClubInfo): Promise<ClubInfo> {
  // TODO: Replace with actual API call
  mockClubInfo = data;
  return mockClubInfo;
}
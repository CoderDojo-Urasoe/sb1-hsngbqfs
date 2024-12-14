export interface User {
  id: string;
  username: string;
  loginId: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
  lastLoginAt: string;
}

export interface Member {
  id: string;
  photo: string;
  name: string;
  nameKana: string;
  company: string;
  position: string;
  industry: string;
  postalCode: string;
  address: string;
  tel: string;
  fax: string;
  sponsor: string;
  url: string;
  joinDate: string;
  memberNumber: string;
  resignDate?: string;
}

export interface Notification {
  id: string;
  type: 'announcement' | 'survey';
  title: string;
  content: string;
  createdAt: string;
  surveyResponses?: SurveyResponse[];
}

export interface SurveyResponse {
  id: string;
  memberId: string;
  notificationId: string;
  attending: boolean;
  comment?: string;
  respondedAt: string;
}

export interface ClubInfo {
  address: string;
  tel: string;
  fax: string;
  meetingDay: string;
  secretary: string;
  foundingDate: string;
  charterNight: string;
  sponsorClub: string;
  clubNumber: string;
  affiliation: string;
  organizationChart: string;
  annualSchedule: string;
}
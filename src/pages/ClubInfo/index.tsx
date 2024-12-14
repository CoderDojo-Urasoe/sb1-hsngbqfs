import { useAuthStore } from '../../store/auth';
import { ClubHeader } from './ClubHeader';
import { ClubInformation } from './ClubInformation';
import { DocumentSection } from './DocumentSection';

export default function ClubInfo() {
  const user = useAuthStore((state) => state.user);
  const isAdminOrEditor = user?.role === 'admin' || user?.role === 'editor';

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">組織図</h1>
      
      <ClubHeader />
      <ClubInformation isEditable={isAdminOrEditor} />
      <DocumentSection isEditable={isAdminOrEditor} />
    </div>
  );
}
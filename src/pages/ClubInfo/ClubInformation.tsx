import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { useClubInfo } from './useClubInfo';
import { useUpdateClubInfo } from './useUpdateClubInfo';
import { ClubInfoEditor } from './ClubInfoEditor';
import { Spinner } from '../../components/ui/Spinner';

interface ClubInformationProps {
  isEditable: boolean;
}

export function ClubInformation({ isEditable }: ClubInformationProps) {
  const [isEditing, setIsEditing] = useState(false);
  const { data: clubInfo, isLoading } = useClubInfo();
  const { mutate: updateClubInfo } = useUpdateClubInfo();

  if (isLoading) {
    return <Spinner />;
  }

  if (!clubInfo) {
    return <div>クラブ情報の読み込みに失敗しました。</div>;
  }

  const handleSave = (updatedInfo: typeof clubInfo) => {
    updateClubInfo(updatedInfo, {
      onSuccess: () => setIsEditing(false),
    });
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">ライオンズクラブ紹介</h2>
        {isEditable && !isEditing && (
          <Button onClick={() => setIsEditing(true)}>
            編集
          </Button>
        )}
      </div>

      {isEditing ? (
        <ClubInfoEditor
          clubInfo={clubInfo}
          onSave={handleSave}
          onCancel={() => setIsEditing(false)}
        />
      ) : (
        <div className="space-y-4">
          <InfoItem label="住所" value={clubInfo.address} />
          <InfoItem label="TEL" value={clubInfo.tel} />
          <InfoItem label="FAX" value={clubInfo.fax} />
          <InfoItem label="例会日" value={clubInfo.meetingDay} />
          <InfoItem label="事務局員名" value={clubInfo.secretary} />
          <InfoItem label="結成年月日" value={clubInfo.foundingDate} />
          <InfoItem label="チャーターナイト" value={clubInfo.charterNight} />
          <InfoItem label="スポンサークラブ" value={clubInfo.sponsorClub} />
          <InfoItem label="クラブNo." value={clubInfo.clubNumber} />
          <InfoItem label="所属" value={clubInfo.affiliation} />
        </div>
      )}
    </div>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value}</dd>
    </div>
  );
}
import { Member } from '../../types';

interface MemberInfoProps {
  member: Member;
}

export function MemberInfo({ member }: MemberInfoProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-6">
        <div className="flex items-start space-x-6">
          <img
            src={member.photo}
            alt={member.name}
            className="w-32 h-32 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-4">
            <InfoItem label="フリガナ" value={member.nameKana} />
            <InfoItem label="会社名" value={member.company} />
            <InfoItem label="役職名" value={member.position} />
            <InfoItem label="業種" value={member.industry} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InfoItem label="郵便番号" value={member.postalCode} />
          <InfoItem label="住所" value={member.address} />
          <InfoItem label="TEL" value={member.tel} />
          <InfoItem label="FAX" value={member.fax} />
          <InfoItem label="スポンサー" value={member.sponsor} />
          <InfoItem
            label="URL"
            value={
              member.url ? (
                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {member.url}
                </a>
              ) : (
                '-'
              )
            }
          />
          <InfoItem label="入会年月日" value={member.joinDate} />
          <InfoItem label="会員番号" value={member.memberNumber} />
          {member.resignDate && (
            <InfoItem label="退会年月日" value={member.resignDate} />
          )}
        </div>
      </div>
    </div>
  );
}

interface InfoItemProps {
  label: string;
  value: React.ReactNode;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div>
      <dt className="text-sm font-medium text-gray-500">{label}</dt>
      <dd className="mt-1 text-sm text-gray-900">{value || '-'}</dd>
    </div>
  );
}
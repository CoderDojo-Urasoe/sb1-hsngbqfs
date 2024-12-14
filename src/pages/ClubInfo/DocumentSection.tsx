import { useCallback } from 'react';
import { Upload } from 'lucide-react';
import { Button } from '../../components/ui/Button';
import { useClubInfo } from './useClubInfo';
import { useUpdateClubInfo } from './useUpdateClubInfo';

interface DocumentSectionProps {
  isEditable: boolean;
}

export function DocumentSection({ isEditable }: DocumentSectionProps) {
  const { data: clubInfo } = useClubInfo();
  const { mutate: updateClubInfo } = useUpdateClubInfo();

  const handleFileUpload = useCallback(
    async (type: 'organizationChart' | 'annualSchedule', file: File) => {
      // TODO: Implement actual file upload
      const fileUrl = URL.createObjectURL(file);
      if (clubInfo) {
        updateClubInfo({
          ...clubInfo,
          [type]: fileUrl,
        });
      }
    },
    [clubInfo, updateClubInfo]
  );

  if (!clubInfo) return null;

  return (
    <div className="space-y-6">
      <DocumentItem
        title="組織図"
        fileUrl={clubInfo.organizationChart}
        onUpload={(file) => handleFileUpload('organizationChart', file)}
        isEditable={isEditable}
      />
      
      <DocumentItem
        title="年間スケジュール"
        fileUrl={clubInfo.annualSchedule}
        onUpload={(file) => handleFileUpload('annualSchedule', file)}
        isEditable={isEditable}
      />
    </div>
  );
}

interface DocumentItemProps {
  title: string;
  fileUrl: string;
  onUpload: (file: File) => void;
  isEditable: boolean;
}

function DocumentItem({
  title,
  fileUrl,
  onUpload,
  isEditable,
}: DocumentItemProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-medium">{title}</h3>
        {isEditable && (
          <div>
            <input
              type="file"
              id={`file-${title}`}
              className="hidden"
              accept="application/pdf"
              onChange={handleFileChange}
            />
            <label htmlFor={`file-${title}`}>
              <Button
                type="button"
                variant="outline"
                className="flex items-center gap-2"
                as="span"
              >
                <Upload className="h-4 w-4" />
                <span>ファイルupload</span>
              </Button>
            </label>
          </div>
        )}
      </div>

      {fileUrl && (
        <div className="aspect-[16/9] relative">
          <iframe
            src={fileUrl}
            className="w-full h-full absolute"
            title={title}
          />
        </div>
      )}
    </div>
  );
}
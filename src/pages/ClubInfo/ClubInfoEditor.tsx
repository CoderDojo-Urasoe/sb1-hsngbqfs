import { useState } from 'react';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { ClubInfo } from '../../types';

interface ClubInfoEditorProps {
  clubInfo: ClubInfo;
  onSave: (info: ClubInfo) => void;
  onCancel: () => void;
}

export function ClubInfoEditor({
  clubInfo,
  onSave,
  onCancel,
}: ClubInfoEditorProps) {
  const [formData, setFormData] = useState(clubInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4">
        <Field
          label="住所"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
        <Field
          label="TEL"
          name="tel"
          value={formData.tel}
          onChange={handleChange}
        />
        <Field
          label="FAX"
          name="fax"
          value={formData.fax}
          onChange={handleChange}
        />
        <Field
          label="例会日"
          name="meetingDay"
          value={formData.meetingDay}
          onChange={handleChange}
        />
        <Field
          label="事務局員名"
          name="secretary"
          value={formData.secretary}
          onChange={handleChange}
        />
        <Field
          label="結成年月日"
          name="foundingDate"
          value={formData.foundingDate}
          onChange={handleChange}
        />
        <Field
          label="チャーターナイト"
          name="charterNight"
          value={formData.charterNight}
          onChange={handleChange}
        />
        <Field
          label="スポンサークラブ"
          name="sponsorClub"
          value={formData.sponsorClub}
          onChange={handleChange}
        />
        <Field
          label="クラブNo."
          name="clubNumber"
          value={formData.clubNumber}
          onChange={handleChange}
        />
        <Field
          label="所属"
          name="affiliation"
          value={formData.affiliation}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onCancel}>
          キャンセル
        </Button>
        <Button type="submit">
          保存
        </Button>
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Field({ label, name, value, onChange }: FieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <Input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1"
      />
    </div>
  );
}
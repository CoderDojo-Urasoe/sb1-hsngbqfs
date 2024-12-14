import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Member } from '../../types';

interface MemberFormContentProps {
  member?: Member;
  onSubmit: (data: Omit<Member, 'id'>) => void;
  isLoading?: boolean;
}

export function MemberFormContent({
  member,
  onSubmit,
  isLoading,
}: MemberFormContentProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    photo: member?.photo || '',
    name: member?.name || '',
    nameKana: member?.nameKana || '',
    company: member?.company || '',
    position: member?.position || '',
    industry: member?.industry || '',
    postalCode: member?.postalCode || '',
    address: member?.address || '',
    tel: member?.tel || '',
    fax: member?.fax || '',
    sponsor: member?.sponsor || '',
    url: member?.url || '',
    joinDate: member?.joinDate || '',
    memberNumber: member?.memberNumber || '',
    resignDate: member?.resignDate || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="grid grid-cols-1 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              顔写真URL
            </label>
            <Input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              会員氏名
            </label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              フリガナ
            </label>
            <Input
              type="text"
              name="nameKana"
              value={formData.nameKana}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              会社名
            </label>
            <Input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              役職名
            </label>
            <Input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              業種
            </label>
            <Input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              郵便番号
            </label>
            <Input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              住所
            </label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              TEL
            </label>
            <Input
              type="tel"
              name="tel"
              value={formData.tel}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              FAX
            </label>
            <Input
              type="tel"
              name="fax"
              value={formData.fax}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              スポンサー
            </label>
            <Input
              type="text"
              name="sponsor"
              value={formData.sponsor}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              URL
            </label>
            <Input
              type="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              入会年月日
            </label>
            <Input
              type="date"
              name="joinDate"
              value={formData.joinDate}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              会員番号
            </label>
            <Input
              type="text"
              name="memberNumber"
              value={formData.memberNumber}
              onChange={handleChange}
              required
              className="mt-1"
            />
          </div>

          {member && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                退会年月日
              </label>
              <Input
                type="date"
                name="resignDate"
                value={formData.resignDate}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => navigate('/members')}
        >
          戻る
        </Button>
        <Button
          type="submit"
          disabled={isLoading}
        >
          {member ? '更新' : '登録'}
        </Button>
      </div>
    </form>
  );
}
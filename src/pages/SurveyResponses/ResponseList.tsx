import { SurveyResponse } from '../../types';
import { formatDate } from '../../utils/date';

interface ResponseListProps {
  responses: SurveyResponse[];
}

export function ResponseList({ responses }: ResponseListProps) {
  const attendingCount = responses.filter(r => r.attending).length;
  const notAttendingCount = responses.length - attendingCount;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-medium text-green-600">参加</h3>
          <p className="text-2xl font-bold">{attendingCount}名</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4">
          <h3 className="text-lg font-medium text-red-600">不参加</h3>
          <p className="text-2xl font-bold">{notAttendingCount}名</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                会員名
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                参加可否
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                コメント
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                回答日
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {responses.map((response) => (
              <tr key={response.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {response.memberId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      response.attending
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {response.attending ? '参加' : '不参加'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {response.comment || '-'}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {formatDate(response.respondedAt)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
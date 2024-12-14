import { Home, Users, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navigation() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around py-2">
          <Link
            to="/"
            className={`flex flex-col items-center p-2 ${
              location.pathname === '/' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">ホーム</span>
          </Link>
          
          <Link
            to="/members"
            className={`flex flex-col items-center p-2 ${
              location.pathname === '/members' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <Users size={24} />
            <span className="text-xs mt-1">会員名簿</span>
          </Link>
          
          <Link
            to="/club-info"
            className={`flex flex-col items-center p-2 ${
              location.pathname === '/club-info' ? 'text-blue-600' : 'text-gray-600'
            }`}
          >
            <FileText size={24} />
            <span className="text-xs mt-1">組織図</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
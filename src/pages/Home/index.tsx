import { useAuthStore } from '../../store/auth';
import { WelcomeMessage } from './WelcomeMessage';
import { NotificationList } from './NotificationList';
import { ActionButtons } from './ActionButtons';
import { KeyVisual } from './KeyVisual';

export default function Home() {
  const user = useAuthStore((state) => state.user);

  return (
    <div className="space-y-6">
      <WelcomeMessage username={user?.username || ''} />
      <KeyVisual />
      <div className="prose max-w-none">
        <h2>アプリのコンセプト</h2>
        <p>
          浦添てだこライオンズクラブの会員専用アプリケーションです。
          会員名簿の閲覧、組織図の確認、事務局からのお知らせの確認など、
          クラブ活動に必要な情報にアクセスできます。
        </p>
      </div>
      <ActionButtons />
      <NotificationList />
    </div>
  );
}
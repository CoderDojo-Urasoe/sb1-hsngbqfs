import { useEffect, useState } from 'react';

interface WelcomeMessageProps {
  username: string;
}

export function WelcomeMessage({ username }: WelcomeMessageProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-50 flex justify-center">
      <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-down">
        <p className="text-center">
          {username} LION ログインありがとうございます。
          <br />
          今日も元気に We Serve!
        </p>
      </div>
    </div>
  );
}
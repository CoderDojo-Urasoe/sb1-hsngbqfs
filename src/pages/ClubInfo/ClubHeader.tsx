import { Crown } from 'lucide-react';

export function ClubHeader() {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">
      <div className="flex justify-center mb-4">
        <Crown className="w-20 h-20 text-blue-600" />
      </div>
      <p className="text-lg animate-fade-in-down whitespace-pre-line">
        ライオンズの誓い{'\n'}
        われわれは知性を高め{'\n'}
        友愛と相互理解の精神を養い{'\n'}
        平和と自由を守り{'\n'}
        社会奉仕に精進する
      </p>
    </div>
  );
}
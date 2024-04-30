import GnbItem from '../../molecules/GnbItem/GnbItem';
import { v4 as uuidv4 } from 'uuid';

export default function GlobalNavigator() {
  return (
    <nav className="fixed bottom-0 left-[50%] translate-x-[-50%] w-screen border-t border-primary-500 min-w-[320px] max-w-md bg-grayscale-white">
      <ul className="flex items-center justify-between gap-4 font-medium text-gray-400">
        {[
          { title: '서재', to: '/library/booktree', src: '/images/icons/home' },
          { title: '기록', to: '/record/memo', src: '/images/icons/record' },
          { title: '피드', to: '/feed', src: '/images/icons/feed' },
          { title: '캐릭터', to: '/character', src: '/images/icons/home' },
          { title: '마이페이지', to: '/mypage', src: '/images/icons/mypage' },
        ].map((item) => (
          <GnbItem key={uuidv4()} {...item} />
        ))}
      </ul>
    </nav>
  );
}

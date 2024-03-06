import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function GlobalNavigator() {
  const { pathname: currentPage } = useLocation();

  const navigate = useNavigate();

  const handleClick = (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const landingPage = button.name;
    navigate(`/${landingPage}`);
  };

  return (
    <nav className="fixed bottom-0 left-[50%] translate-x-[-50%] w-screen border-t border-primary-500 min-w-[320px] max-w-md bg-grayscale-white">
      <ul
        onClick={handleClick}
        className="flex gap-4 justify-between items-center font-medium text-gray-400"
      >
        <li
          className={
            currentPage.startsWith('/library')
              ? 'text-red-500 nav-listItem'
              : 'nav-listItem'
          }
        >
          <button className="nav-button" name="library">
            <img
              src={
                currentPage.startsWith('/library')
                  ? '/images/icons/home=active.svg'
                  : '/images/icons/home=default.svg'
              }
              alt="서재 버튼"
            />
            <span>서재</span>
          </button>
        </li>
        <li
          className={
            currentPage.startsWith('/record')
              ? 'text-red-500 nav-listItem'
              : ' nav-listItem'
          }
        >
          <button className="nav-button" name="record/memo">
            <img
              src={
                currentPage.startsWith('/record')
                  ? '/images/icons/record=active.svg'
                  : '/images/icons/record=default.svg'
              }
              alt="기록"
            />
            <span>기록</span>
          </button>
        </li>
        <li
          className={
            currentPage.startsWith('/feed')
              ? 'text-red-500 nav-listItem'
              : 'nav-listItem'
          }
        >
          <button className="nav-button" name="feed">
            <img
              src={
                currentPage.startsWith('/feed')
                  ? '/images/icons/feed=active.svg'
                  : '/images/icons/feed=default.svg'
              }
              alt="피드"
            />
            <span>피드</span>
          </button>
        </li>
        <li
          className={
            currentPage.startsWith('/character')
              ? 'text-red-500 nav-listItem'
              : 'nav-listItem'
          }
        >
          <button className="nav-button" name="character">
            <img
              src={
                currentPage.startsWith('/character')
                  ? '/images/icons/character=active.svg'
                  : '/images/icons/character=default.svg'
              }
              alt="캐릭터 버튼"
            />
            <span>캐릭터</span>
          </button>
        </li>
        <li
          className={
            currentPage.startsWith('/mypage')
              ? 'text-red-500 nav-listItem'
              : 'nav-listItem'
          }
        >
          <button className="nav-button" name="mypage">
            <img
              src={
                currentPage.startsWith('/mypage')
                  ? '/images/icons/mypage=active.svg'
                  : '/images/icons/mypage=default.svg'
              }
              alt="마이페이지"
            />
            <span>마이페이지</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

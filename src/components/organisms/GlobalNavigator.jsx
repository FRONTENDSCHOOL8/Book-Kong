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
    <nav className="fixed bottom-0 left-0 w-screen">
      <ul
        onClick={handleClick}
        className="flex justify-between items-center font-medium py-2 text-gray-400"
      >
        <li
          className={
            currentPage === '/library'
              ? 'text-primary-500 w-20 flex flex-col justify-center items-center'
              : 'w-20 flex flex-col justify-center items-center'
          }
        >
          <button
            className="flex flex-col justify-center items-center cursor-pointer"
            name="library"
          >
            <img
              src={
                currentPage === '/library'
                  ? '/images/icons/home=active.svg'
                  : '/images/icons/home=default.svg'
              }
              alt="서재 버튼"
            />
            <span className="text-nav-list font-medium">서재</span>
          </button>
        </li>
        <li
          className={
            currentPage === '/record'
              ? 'text-primary-500 w-20 flex flex-col justify-center items-center'
              : 'w-20 flex flex-col justify-center items-center'
          }
        >
          <button
            className="flex flex-col justify-center items-center cursor-pointer"
            name="record"
          >
            <img
              src={
                currentPage === '/record'
                  ? '/images/icons/record=active.svg'
                  : '/images/icons/record=default.svg'
              }
              alt="기록 버튼"
            />
            <span className="text-nav-list font-medium">기록</span>
          </button>
        </li>
        <li
          className={
            currentPage === '/feed'
              ? 'text-primary-500 w-20 flex flex-col justify-center items-center'
              : 'w-20 flex flex-col justify-center items-center'
          }
        >
          <button
            className="flex flex-col justify-center items-center cursor-pointer"
            name="feed"
          >
            <img
              src={
                currentPage === '/feed'
                  ? '/images/icons/feed=active.svg'
                  : '/images/icons/feed=default.svg'
              }
              alt="피드 버튼"
            />
            <span className="text-nav-list font-medium">피드</span>
          </button>
        </li>
        <li
          className={
            currentPage === '/character'
              ? 'text-primary-500 w-20 flex flex-col justify-center items-center'
              : 'w-20 flex flex-col justify-center items-center'
          }
        >
          <button
            className="flex flex-col justify-center items-center cursor-pointer"
            name="character"
          >
            <img
              src={
                currentPage === '/character'
                  ? '/images/icons/character=active.svg'
                  : '/images/icons/character=default.svg'
              }
              alt="캐릭터 버튼"
            />
            <span className="text-nav-list font-medium">캐릭터</span>
          </button>
        </li>
        <li
          className={
            currentPage === '/mypage'
              ? 'text-primary-500 w-20 flex flex-col justify-center items-center'
              : 'w-20 flex flex-col justify-center items-center'
          }
        >
          <button
            className="flex flex-col justify-center items-center cursor-pointer"
            name="mypage"
          >
            <img
              src={
                currentPage === '/mypage'
                  ? '/images/icons/mypage=active.svg'
                  : '/images/icons/mypage=default.svg'
              }
              alt="기록 버튼"
            />
            <span className="text-nav-list font-medium">마이페이지</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

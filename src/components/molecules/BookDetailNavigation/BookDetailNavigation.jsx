import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function BookDetailNavigation() {
  const [activeTab, setActiveTab] = useState('bookInfo');
  const navStyle = 'text-gray-500 nav-default tab-menu w-full';
  const navActive = 'nav-active';

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <nav className="sticky px-4 bg-background-gray left-0 top-[56px] z-[18]">
      <ul className="flex items-center justify-start h-[54px]">
        <li className="flex items-center justify-center h-full grow ">
          <NavLink
            to="#bookInfo"
            className={`${navStyle} ${
              activeTab === 'bookInfo' ? navActive : 'text-gray-500'
            }`}
            onClick={() => {
              handleTabClick('bookInfo');
            }}
            reloadDocument
          >
            책 정보
          </NavLink>
        </li>
        <li className="flex items-center justify-center h-full grow">
          <NavLink
            to="#memo"
            className={`${navStyle} ${
              activeTab === 'memo' ? navActive : 'text-gray-500'
            }`}
            onClick={() => {
              handleTabClick('memo');
            }}
            reloadDocument
          >
            메모
          </NavLink>
        </li>
        <li className="flex items-center justify-center h-full grow">
          <NavLink
            // href="#feed"
            to="#feed"
            className={`${navStyle} ${
              activeTab === 'feed' ? navActive : 'text-gray-500'
            }`}
            onClick={() => {
              handleTabClick('feed');
            }}
            reloadDocument
          >
            피드
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

BookDetailNavigation.propTypes = {};

export default BookDetailNavigation;

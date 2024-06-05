import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function BookDetailNavigation() {
  const [activeTab, setActiveTab] = useState('bookInfo');
  const NavStyle = 'text-gray-500 nav-default tab-menu w-full';
  const NavActive = 'nav-active';

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <nav className="sticky px-4 bg-background-gray left-0 top-[57px] z-[18]">
      <ul className="flex items-center justify-start h-[54px]">
        <li className="flex items-center justify-center h-full grow ">
          <NavLink
            to="#bookInfo"
            className={`${NavStyle} ${
              activeTab === 'bookInfo' ? NavActive : 'text-gray-500'
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
            className={`${NavStyle} ${
              activeTab === 'memo' ? NavActive : 'text-gray-500'
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
            className={`${NavStyle} ${
              activeTab === 'feed' ? NavActive : 'text-gray-500'
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

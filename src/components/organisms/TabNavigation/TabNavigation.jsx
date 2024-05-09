import PropTypes from 'prop-types';
import TabButton from '../../atoms/TabButton/TabButton';
import TabLink from '../../atoms/TabLink/TabLink';
import { useState } from 'react';

function TabNavigation({ page }) {
  // 네비게이션 정보는 되도록 주소 입력창에 저장하는 것이 좋습니다.
  //
  const [button, setButton] = useState('책 정보');

  const handleClick = (e) => {
    const a = e.target.closest('a');
    if (!a) return;

    const target = a.innerText;

    if (target === '책 정보') {
      setButton('책 정보');
    } else if (target === '메모') {
      setButton('메모');
    } else {
      setButton('피드');
    }

    // 클릭할 때마다 버튼의 상태를 콘솔에 출력
  }
  return (
    <>
      {page === '기록' && (
        <nav className="px-4 border-b bg-grayscale-white">
          <ul className="flex items-center justify-start gap-6 ">
            <li>
              <TabButton path={'/record/memo'} title={'메모'} />
            </li>
            <li>
              <TabButton path={'/record/statistics'} title={'통계'} />
            </li>
          </ul>
        </nav>
      )}
      {page === '서재' && (
        <nav className="px-4 border-b bg-grayscale-white">
          <ul className="flex items-center justify-start gap-6 ">
            <li>
              <TabButton path={'/library/booktree'} title={'책나무'} />
            </li>
            <li>
              <TabButton path={'/library/bookshelf'} title={'책장'} />
            </li>
          </ul>
        </nav>
      )}
      {page === '상세페이지' && (
        <nav onClick={handleClick} className="sticky px-4 bg-background-gray left-0 top-[57px] z-20">
          <ul className="flex items-center justify-start h-[54px]">
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#bookInfo'} title={'책 정보'} button={button} />
            </li>
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#memo'} title={'메모'} button={button} />
            </li>
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#feed'} title={'피드'} button={button} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

TabNavigation.propTypes = { page: PropTypes.string.isRequired };

export default TabNavigation;

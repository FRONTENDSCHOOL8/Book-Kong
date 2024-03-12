import PropTypes from 'prop-types';
import TabButton from '../../atoms/TabButton/TabButton';
import TabLink from '../../atoms/TabLink/TabLink';

function TabNavigation({ page }) {
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
        <nav className="sticky top-0 px-4 bg-background-gray">
          <ul className="flex items-center justify-start h-[54px]">
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#bookInfo'} title={'책 정보'} className="isActive" />
            </li>
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#memo'} title={'메모'} />
            </li>
            <li className="w-[33.3333%] h-full">
              <TabLink path={'#feed'} title={'피드'} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

TabNavigation.propTypes = { page: PropTypes.string.isRequired };

export default TabNavigation;

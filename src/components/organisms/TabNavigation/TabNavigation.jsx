import PropTypes from 'prop-types';
import TabButton from '../../atoms/TabButton/TabButton';

function TabNavigation({ page }) {
  return (
    <>
      {page === '기록' && (
        <nav className="px-4 border-b">
          <ul className="flex justify-start items-center gap-6 ">
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
        <nav className="px-4 border-b">
          <ul className="flex justify-start items-center gap-6 ">
            <li>
              <TabButton path={'/library/booktree'} title={'책나무'} />
            </li>
            <li>
              <TabButton path={'library/bookshelf'} title={'책장'} />
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

TabNavigation.propTypes = { page: PropTypes.string.isRequired };

export default TabNavigation;

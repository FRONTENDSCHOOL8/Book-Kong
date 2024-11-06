import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TabButton({ path, title }) {
  const { pathname: currentPage } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <button
      onClick={handleClick}
      className={
        currentPage === path
          ? 'tab-menu py-[10px] text-primary-500 border-b-[3px] border-t-[3px] border-t-transparent border-b-primary-500 box-border'
          : 'tab-menu py-[10px] text-gray-500 box-border'
      }
    >
      {title}
    </button>
  );
}

TabButton.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TabButton;

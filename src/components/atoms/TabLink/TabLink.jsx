import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function TabLink({ path, title, button }) {
  return (
    <Link
      to={path}
      name={path}
      className={`tab-menu box-border block h-full leading-[54px] ${
        button === title
          ? 'text-primary-500 border-b-[3px] border-primary-500'
          : 'text-gray-500'
      }`}
      // onClick={handleClick}
    >
      {title}
    </Link>
  );
}

TabLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default TabLink;

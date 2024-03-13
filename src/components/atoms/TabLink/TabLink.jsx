import PropTypes from 'prop-types';

function TabLink({ path, title, button }) {
  return (
    <a
      href={path}
      name={path}
      className={`tab-menu box-border block h-full leading-[54px] ${
        button === title
          ? 'text-primary-500 border-b-[3px] border-primary-500'
          : 'text-gray-500'
      }`}
      // onClick={handleClick}
    >
      {title}
    </a>
  );
}

TabLink.propTypes = {
  path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
};

export default TabLink;

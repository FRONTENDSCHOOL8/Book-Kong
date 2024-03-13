import PropTypes from 'prop-types';

function FilterIcon({ title, onClick, filter }) {
  return (
    <button
      className={`px-3 py-1 ${title === filter ? 'bg-primary-500' : 'bg-grayscale-white'} rounded-[33px] ${title === filter ? 'text-grayscale-white' : 'text-gray-400'} text-tab-menu`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}

FilterIcon.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default FilterIcon;

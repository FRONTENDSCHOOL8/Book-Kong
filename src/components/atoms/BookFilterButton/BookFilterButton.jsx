import { string, func } from 'prop-types';

function BookFilterButton({ type, onClick, filter: filterType }) {
  return (
    <button
      className={`px-3 py-1 ${type === filterType ? 'bg-primary-500' : 'bg-grayscale-white'} rounded-[33px] ${type === filterType ? 'text-grayscale-white' : 'text-gray-400'} text-tab-menu`}
      onClick={onClick}
    >
      {type}
    </button>
  );
}

BookFilterButton.propTypes = {
  type: string.isRequired,
  onClick: func.isRequired,
  filter: string.isRequired,
};

export default BookFilterButton;

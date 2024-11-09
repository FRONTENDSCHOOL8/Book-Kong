import { string, func, node } from 'prop-types';

function StateFilterBtn({ onClick, readingState, children }) {
  return (
    <button
      className={`px-3 py-1 ${children === readingState ? 'bg-primary-500' : 'bg-grayscale-white'} rounded-[33px] ${children === readingState ? 'text-grayscale-white' : 'text-gray-400'} text-tab-menu`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

StateFilterBtn.propTypes = {
  onClick: func.isRequired,
  readingState: string.isRequired,
  children: string.isRequired,
};

export default StateFilterBtn;

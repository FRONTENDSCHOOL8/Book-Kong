import { func, string } from 'prop-types';
import SortingIcon from '../../atoms/SortingIcon/SortingIcon';

function SortingBtn({ sortState, onClick, customClassName }) {
  const defaultClassName =
    'sort-button flex justify-center items-end gap-2 text-gray-700 contents-xs';

  const className = `${defaultClassName} ${customClassName}`;

  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
      aria-label="정렬 토글"
    >
      <SortingIcon />
      <span>{sortState}</span>
    </button>
  );
}

SortingBtn.propTypes = {
  sortState: string.isRequired,
  onClick: func.isRequired,
  customClassName: string,
};

export default SortingBtn;

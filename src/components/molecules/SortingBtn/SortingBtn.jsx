import { useState } from 'react';
import { arrayOf, object, string } from 'prop-types';
import SortingIcon from '../../atoms/SortingIcon/SortingIcon';

function SortingBtn({ data, customClassName }) {
  const defaultClassName =
    'sort-button flex justify-center items-end gap-2 text-gray-700 contents-xs';

  const className = `${defaultClassName} ${customClassName}`;

  const [sorting, setSorting] = useState('오래된 순');

  const handleSort = () => {
    switch (sorting) {
      case '오래된 순':
        setSorting('최신 순');
        data.reverse();
        break;

      case '최신 순':
        setSorting('오래된 순');
        data.reverse();
        break;
    }
  };

  return (
    <button
      type="button"
      onClick={handleSort}
      className={className}
      aria-label="정렬 토글"
    >
      <SortingIcon />
      <span>{sorting}</span>
    </button>
  );
}

SortingBtn.propTypes = {
  data: arrayOf(object).isRequired,
  customClassName: string,
};

export default SortingBtn;

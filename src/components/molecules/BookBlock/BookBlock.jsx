import { Skeleton } from '@mui/material';
import { number, string, bool } from 'prop-types';
import BookTitle from '../../atoms/BookTitle/BookTitle';
import { memo } from 'react';

const getClassNames = (index) => {
  if (index % 3 === 0)
    return 'w-[230px] border rounded-sm border-grayscale-white ml-[-24px] bg-primary-500 text-white';

  if (index % 3 === 1)
    return 'w-[230px] border rounded-sm border-grayscale-white ml-6 bg-badge-yellow text-grayscale-900';

  if (index % 3 === 2)
    return 'w-[230px] border rounded-sm border-grayscale-white bg-badge-yellow-02 text-primary-500';
};

const BookBlock = memo(function BookBlock({
  title,
  page,
  index,
  id,
  isLoading,
}) {
  return isLoading ? (
    <li>
      <Skeleton
        variant="rounded"
        className={getClassNames(index)}
        height={Math.max(page * 0.1, 24)}
      >
        <BookTitle id={id}>{title}</BookTitle>
      </Skeleton>
    </li>
  ) : (
    <li
      className={getClassNames(index)}
      style={{ height: `${Math.max(page * 0.1, 24)}px` }}
    >
      <BookTitle id={id}>{title}</BookTitle>
    </li>
  );
});

BookBlock.propTypes = {
  title: string.isRequired,
  page: number.isRequired,
  index: number.isRequired,
  id: string.isRequired,
  isLoading: bool,
};

export default BookBlock;

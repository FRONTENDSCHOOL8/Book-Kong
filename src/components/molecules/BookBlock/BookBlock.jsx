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

// 페이지 별 키(key)에 설정할 높이를 아래처럼 작성합니다.
const BookBlock = memo(function BookBlock({
  title,
  page,
  index,
  id,
  isLoading,
}) {
  // 마크업 반환 (병합된 클래스 이름 설정)
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

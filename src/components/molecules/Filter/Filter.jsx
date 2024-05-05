import { func, string, bool } from 'prop-types';
import FilterIcon from '../../atoms/FilterIcon/FilterIcon';
import { Skeleton } from '@mui/material';

function Filter({ onClick, filter, isLoading = false }) {
  // ESLint 에러 나지 말라고 그냥 쓴 코드
  isLoading;
  return (
    <div className="flex py-4 gap-1">
      {/* {isLoading ? ( */}
      <>
        <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
          <FilterIcon title="전체" onClick={onClick} filter={filter} />
        </Skeleton>
        <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
          <FilterIcon title="완독" onClick={onClick} filter={filter} />
        </Skeleton>
        <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
          <FilterIcon title="독서중" onClick={onClick} filter={filter} />
        </Skeleton>
        <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
          <FilterIcon title="희망 도서" onClick={onClick} filter={filter} />
        </Skeleton>
      </>
      {/* ) : (
        <>
          <FilterIcon title="전체" onClick={onClick} filter={filter} />
          <FilterIcon title="완독" onClick={onClick} filter={filter} />
          <FilterIcon title="독서중" onClick={onClick} filter={filter} />
          <FilterIcon title="희망 도서" onClick={onClick} filter={filter} />
        </>
      )} */}
    </div>
  );
}

Filter.propTypes = {
  onClick: func.isRequired,
  filter: string.isRequired,
  isLoading: bool,
};

export default Filter;

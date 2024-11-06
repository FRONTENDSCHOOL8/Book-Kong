import { Skeleton } from '@mui/material';
import { func, string, bool } from 'prop-types';
import StateFilterBtn from '../../atoms/StateFilterBtn/StateFilterBtn';

function ReadingStateFilter({ onClick, readingState, isLoading = false }) {
  return (
    <div className="flex py-4 gap-1">
      <StateFilterBtn onClick={onClick} readingState={readingState}>
        전체
      </StateFilterBtn>
      <StateFilterBtn onClick={onClick} readingState={readingState}>
        완독
      </StateFilterBtn>
      <StateFilterBtn onClick={onClick} readingState={readingState}>
        독서중
      </StateFilterBtn>
      <StateFilterBtn onClick={onClick} readingState={readingState}>
        희망 도서
      </StateFilterBtn>
    </div>
  );
}

ReadingStateFilter.propTypes = {
  onClick: func.isRequired,
  readingState: string.isRequired,
  isLoading: bool,
};

export default ReadingStateFilter;

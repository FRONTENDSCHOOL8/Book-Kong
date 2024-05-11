import { Skeleton } from '@mui/material';
import { func, string, bool } from 'prop-types';
import BookFilterButton from '../../atoms/BookFilterButton/BookFilterButton';

function BookFilterBox({ onClick, filter: filterType, isLoading = false }) {
  return (
    <div className="flex py-4 gap-1">
      {isLoading ? (
        <>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              type="전체"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              type="완독"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              type="독서중"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              type="희망 도서"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
        </>
      ) : (
        <>
          <BookFilterButton type="전체" onClick={onClick} filter={filterType} />
          <BookFilterButton type="완독" onClick={onClick} filter={filterType} />
          <BookFilterButton
            type="독서중"
            onClick={onClick}
            filter={filterType}
          />
          <BookFilterButton
            type="희망 도서"
            onClick={onClick}
            filter={filterType}
          />
        </>
      )}
    </div>
  );
}

BookFilterBox.propTypes = {
  onClick: func.isRequired,
  filter: string.isRequired,
  isLoading: bool,
};

export default BookFilterBox;

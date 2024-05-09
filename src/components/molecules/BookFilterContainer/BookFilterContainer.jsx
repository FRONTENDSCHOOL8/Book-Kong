import { func, string, bool } from 'prop-types';
import BookFilterButton from '../../atoms/BookFilterButton/BookFilterButton';
import { Skeleton } from '@mui/material';

function BookFilterContainer({
  onClick,
  filter: filterType,
  isLoading = false,
}) {
  return (
    <div className="flex py-4 gap-1">
      {isLoading ? (
        <>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              title="전체"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              title="완독"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              title="독서중"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
          <Skeleton variant="rounded" sx={{ borderRadius: '33px' }}>
            <BookFilterButton
              title="희망 도서"
              onClick={onClick}
              filter={filterType}
            />
          </Skeleton>
        </>
      ) : (
        <>
          <BookFilterButton
            title="전체"
            onClick={onClick}
            filter={filterType}
          />
          <BookFilterButton
            title="완독"
            onClick={onClick}
            filter={filterType}
          />
          <BookFilterButton
            title="독서중"
            onClick={onClick}
            filter={filterType}
          />
          <BookFilterButton
            title="희망 도서"
            onClick={onClick}
            filter={filterType}
          />
        </>
      )}
    </div>
  );
}

BookFilterContainer.propTypes = {
  onClick: func.isRequired,
  filter: string.isRequired,
  isLoading: bool,
};

export default BookFilterContainer;

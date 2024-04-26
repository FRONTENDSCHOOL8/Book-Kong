import { func, string } from 'prop-types';
import BookFilterButton from '../../atoms/BookFilterButton/BookFilterButton';

function BookFilterContainer({ onClick, filter: filterType }) {
  return (
    <div className="flex py-4 gap-1">
      <BookFilterButton type="전체" onClick={onClick} filter={filterType} />
      <BookFilterButton type="완독" onClick={onClick} filter={filterType} />
      <BookFilterButton type="독서 중" onClick={onClick} filter={filterType} />
      <BookFilterButton
        type="희망 도서"
        onClick={onClick}
        filter={filterType}
      />
    </div>
  );
}

BookFilterContainer.propTypes = {
  onClick: func.isRequired,
  filter: string.isRequired,
};

export default BookFilterContainer;

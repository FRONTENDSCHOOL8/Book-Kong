import PropTypes from 'prop-types';
import BookInfoStateButton from '../../atoms/BookInfoStateButton/BookInfoStateButton';

function BookInfoState({ status, onClick }) {
  return (
    <>
      <div className="flex justify-center gap-2 items-center">
        <BookInfoStateButton title={'완독'} onClick={onClick} status={status} />
        <BookInfoStateButton
          title={'독서중'}
          onClick={onClick}
          status={status}
        />
        <BookInfoStateButton
          title={'희망 도서'}
          onClick={onClick}
          status={status}
        />
      </div>
    </>
  );
}

BookInfoState.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookInfoState;

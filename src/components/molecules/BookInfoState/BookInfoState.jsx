import PropTypes from 'prop-types';
import WishButton from '../../atoms/BookInfoStateButton/WishButton/WishButton';
import DoneButton from '../../atoms/BookInfoStateButton/DoneButton/DoneButton';
import ReadingButton from '../../atoms/BookInfoStateButton/ReadingButton/ReadingButton';

function BookInfoState({ status, onClick }) {
  return (
    <>
      <div className="flex justify-center gap-2 items-center">
        <DoneButton onClick={onClick} isActive={status === '완독'} />
        <ReadingButton onClick={onClick} isActive={status === '독서중'} />
        <WishButton onClick={onClick} isActive={status === '희망 도서'} />
      </div>
    </>
  );
}

BookInfoState.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookInfoState;

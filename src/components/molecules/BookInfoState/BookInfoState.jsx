import PropTypes from 'prop-types';
import 완독버튼 from "../../atoms/BookInfoStateButton/완독버튼.jsx";
import 독서중버튼 from "../../atoms/BookInfoStateButton/독서중버튼.jsx";
import 희망도서버튼 from "../../atoms/BookInfoStateButton/희망도서버튼.jsx";

function BookInfoState({ status, onClick }) {
  return (
    <>
      <div className="flex justify-center gap-2 items-center">
        <완독버튼 onClick={onClick} isActive={status === '완독'} />
        <독서중버튼 onClick={onClick} isActive={status === '독서중'} />
        <희망도서버튼 onClick={onClick} isActive={status === '희망 도서'} />
      </div>
    </>
  );
}

BookInfoState.propTypes = {
  status: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default BookInfoState;

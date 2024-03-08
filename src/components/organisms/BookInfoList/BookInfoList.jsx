import PropTypes from 'prop-types';
import BookInfoInput from '../../molecules/BookInfoInput/BookInfoInput';
('react-router-dom');
import BookInfoImage from '../../atoms/BookInfoImage/BookInfoImage';

function BookInfoList() {
  return (
    <ul className="flex flex-col gap-6">
      <BookInfoImage />
      <BookInfoInput title={'책 제목'} />
      <BookInfoInput title={'지은이/옮긴이'} />
      <BookInfoInput title={'출판사'} />
      <BookInfoInput title={'총 페이지'} />
      <BookInfoInput title={'ISBN'} />
    </ul>
  );
}

BookInfoList.propTypes = {};

export default BookInfoList;

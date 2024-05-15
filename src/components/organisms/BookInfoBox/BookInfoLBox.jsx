import { object } from 'prop-types';
import { useState, useCallback } from 'react';
import debounce from '../../../utils/debounce';
import TextInputBox from '../../molecules/TextInputBox/TextInputBox';
import BookCoverInput from '../../atoms/BookCoverInput/BookCoverInput';

function BookInfoBox({ data: aladinBook }) {
  const [bookInfo, setBookInfo] = useState({
    title: aladinBook?.title || '',
    author: aladinBook?.author || '',
    publisher: aladinBook?.publisher || '',
    page: aladinBook?.subInfo.itemPage || '',
    isbn: aladinBook?.isbn13 || '',
  });
  const handleChange = debounce(
    useCallback(
      (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setBookInfo({ ...bookInfo, [inputName]: inputValue });
      },
      [bookInfo]
    )
  );

  return (
    <ul className="flex flex-col gap-6">
      <BookCoverInput title={bookInfo.title} cover={aladinBook?.cover} />
      <TextInputBox
        id="title"
        label="책 제목"
        name="title"
        value={bookInfo.title}
        onChange={handleChange}
      />
      <TextInputBox
        id="author"
        label="지은이/옮긴이"
        name="author"
        value={bookInfo.author}
        onChange={handleChange}
      />
      <TextInputBox
        id="publisher"
        label="출판사"
        name="publisher"
        value={bookInfo.publisher}
        onChange={handleChange}
      />
      <TextInputBox
        id="page"
        label="총 페이지"
        name="total_page"
        value={bookInfo.page}
        onChange={handleChange}
      />
      <TextInputBox
        id="isbn"
        label="ISBN"
        name="isbn_13"
        value={bookInfo.isbn}
        onChange={handleChange}
      />
    </ul>
  );
}

BookInfoBox.propTypes = {
  data: object,
};

export default BookInfoBox;

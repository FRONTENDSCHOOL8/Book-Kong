import { object } from 'prop-types';
import { useState, useCallback } from 'react';
import debounce from '../../../utils/debounce';
import TextInputLi from '../../molecules/TextInputLi/TextInputLi';
import BookCoverInput from '../../atoms/BookCoverInput/BookCoverInput';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';

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
    <fieldset>
      <A11yHidden as="legend">책 정보 입력</A11yHidden>
      <ul className="flex flex-col gap-6">
        <BookCoverInput title={bookInfo.title} cover={aladinBook?.cover} />
        <TextInputLi
          id="title"
          label="책 제목"
          name="title"
          value={bookInfo.title}
          onChange={handleChange}
        />
        <TextInputLi
          id="author"
          label="지은이/옮긴이"
          name="author"
          value={bookInfo.author}
          onChange={handleChange}
        />
        <TextInputLi
          id="publisher"
          label="출판사"
          name="publisher"
          value={bookInfo.publisher}
          onChange={handleChange}
        />
        <TextInputLi
          id="page"
          label="총 페이지"
          name="total_page"
          value={bookInfo.page}
          onChange={handleChange}
        />
        <TextInputLi
          id="isbn"
          label="ISBN"
          name="isbn_13"
          value={bookInfo.isbn}
          onChange={handleChange}
        />
      </ul>
    </fieldset>
  );
}

BookInfoBox.propTypes = {
  data: object,
};

export default BookInfoBox;

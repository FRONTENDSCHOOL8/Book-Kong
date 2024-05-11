import debounce from '../../../utils/debounce';
import { useState, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import TextInputBox from '../../molecules/TextInputBox/TextInputBox';
import BookCoverInput from '../../atoms/BookCoverInput/BookCoverInput';

function BookInfoList() {
  const [searchParams] = useSearchParams();
  const [bookInfo, setBookInfo] = useState({
    title: searchParams.get('title') || '',
    author: searchParams.get('author') || '',
    publisher: searchParams.get('publisher') || '',
    page: searchParams.get('page') || '',
    isbn: searchParams.get('isbn') || '',
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
      <BookCoverInput />
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
        onChange={handleChange}
      />
      <TextInputBox
        id="isbn"
        label="ISBN"
        name="isbn_13"
        onChange={handleChange}
      />
    </ul>
  );
}

export default BookInfoList;

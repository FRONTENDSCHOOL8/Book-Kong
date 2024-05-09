import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TextInputBox from '../../molecules/TextInputBox/TextInputBox';
import BookInfoImage from '../../atoms/BookInfoImage/BookInfoImage';

function BookInfoList() {
  const [searchParams] = useSearchParams();
  const [bookInfo, setBookInfo] = useState({
    title: searchParams.get('title'),
    author: searchParams.get('author'),
    publisher: searchParams.get('publisher'),
    page: searchParams.get('page'),
    isbn: searchParams.get('isbn'),
  });
  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setBookInfo({ ...bookInfo, [inputName]: inputValue });
  };

  return (
    <ul className="flex flex-col gap-6">
      <BookInfoImage />
      <TextInputBox
        id="title"
        label={'책 제목'}
        name="title"
        value={bookInfo.title}
        onchange={handleChange}
      />
      <TextInputBox
        id="author"
        label={'지은이/옮긴이'}
        name="author"
        value={bookInfo.author}
        onchange={handleChange}
      />
      <TextInputBox
        id="publisher"
        label={'출판사'}
        name="publisher"
        value={bookInfo.publisher}
        onchange={handleChange}
      />
      <TextInputBox
        id="page"
        label={'총 페이지'}
        name="page"
        onchange={handleChange}
      />
      <TextInputBox
        id="isbn"
        label={'ISBN'}
        name="isbn"
        onchange={handleChange}
      />
    </ul>
  );
}

export default BookInfoList;

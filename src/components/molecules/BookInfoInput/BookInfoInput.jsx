import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function BookInfoInput({ title }) {
  const [searchParams] = useSearchParams();
  const [bookTitle, setBookTitle] = useState(searchParams.get('title'));
  const [author, setAuthor] = useState(searchParams.get('author'));
  const [publisher, setPublisher] = useState(searchParams.get('publisher'));
  const [page, setPage] = useState(searchParams.get('page'));
  const [isbn, setIsbn] = useState(searchParams.get('isbn'));

  const handleChange = (e) => {
    const target = e.target.id;
    const value = e.target.value;

    if (target === '책 제목') setBookTitle(value);
    else if (target === '지은이/옮긴이') setAuthor(value);
    else if (target === '출판사') setPublisher(value);
    else if (target === '총 페이지') setPage(value);
    else if (target === 'ISBN') setIsbn(value);
  };

  let value = null;

  if (title === '책 제목') value = bookTitle;
  else if (title === '지은이/옮긴이') value = author;
  else if (title === '출판사') value = publisher;
  else if (title === '총 페이지') value = page;
  else if (title === 'ISBN') value = isbn;
  return (
    <li className="flex flex-col justify-center gap-2">
      <label className="contents-md-bold text-grayscale-900" htmlFor={title}>
        {title}
      </label>
      <input
        className="bg-grayscale-white border border-grayscale-400 py-2 px-3 rounded outline-none"
        type="text"
        id={title}
        value={value}
        onChange={handleChange}
      />
    </li>
  );
}

BookInfoInput.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BookInfoInput;

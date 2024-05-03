import BookInfoList from '../BookInfoList/BookInfoList';
import BookInfoState from '../../molecules/BookInfoState/BookInfoState';
import { useState } from 'react';

function BookRegistForm() {
  const [status, setStatus] = useState('완독');

  const handleClick = (e) => {
    e.preventDefault();
    const button = e.target.closest('button');
    if (!button) return;

    setStatus(button.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form id="book-register" onSubmit={handleSubmit}>
      <BookInfoState status={status} onClick={handleClick} />
      <hr className="mt-6 mb-6" />
      <BookInfoList />
    </form>
  );
}

export default BookRegistForm;

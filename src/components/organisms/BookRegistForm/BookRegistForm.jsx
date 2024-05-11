import BookInfoList from '../BookInfoList/BookInfoList';
import BookInfoState from '../../molecules/BookInfoState/BookInfoState';
import { useState, useCallback } from 'react';
import { createLibRecordByForm } from '../../../utils/controlBookData';
import { useNavigate } from 'react-router-dom';

function BookRegistForm() {
  const [status, setStatus] = useState('완독');

  const handleClick = useCallback((e) => {
    e.preventDefault();
    const button = e.target.closest('button');
    if (!button) return;

    setStatus(button.innerText);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      createLibRecordByForm('book-register');
      navigate('/library/bookshelf');
    },
    [navigate]
  );

  return (
    <form id="book-register" onSubmit={handleSubmit}>
      <BookInfoState status={status} onClick={handleClick} />
      <hr className="mt-6 mb-6" />
      <BookInfoList />
    </form>
  );
}

export default BookRegistForm;

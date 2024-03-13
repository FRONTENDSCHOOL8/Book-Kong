import PropTypes from 'prop-types';
import BookInfoStateButton from '../../atoms/BookInfoStateButton/BookInfoStateButton';
import { useState } from 'react';

function BookInfoState() {
  const [status, setStatus] = useState('완독');

  const handleClick = (e) => {
    e.preventDefault();
    const button = e.target.closest('button');
    if (!button) return;

    setStatus(button.innerText);
  };

  return (
    <div className="flex justify-center gap-2 items-center">
      <BookInfoStateButton
        title={'완독'}
        onClick={handleClick}
        status={status}
      />
      <BookInfoStateButton
        title={'독서중'}
        onClick={handleClick}
        status={status}
      />
      <BookInfoStateButton
        title={'희망 도서'}
        onClick={handleClick}
        status={status}
      />
    </div>
  );
}

BookInfoState.propTypes = {};

export default BookInfoState;

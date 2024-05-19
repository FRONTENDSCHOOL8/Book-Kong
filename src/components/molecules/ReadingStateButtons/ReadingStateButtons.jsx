import { memo, useState, useCallback } from 'react';
import DoneButton from '../../atoms/ReadingStateButton/DoneButton/DoneButton';
import WishButton from '../../atoms/ReadingStateButton/WishButton/WishButton';
import ReadingButton from '../../atoms/ReadingStateButton/ReadingButton/ReadingButton';

const ReadingStateButtons = memo(function ReadingStateButtons() {
  const [status, setStatus] = useState('완독');

  const handleChange = useCallback((e) => {
    const input = e.target.closest('input');
    if (!input) return;

    setStatus(input.value);
  }, []);

  return (
    <div className="flex justify-center gap-2 items-center">
      <DoneButton onChange={handleChange} isChecked={status === '완독'} />
      <ReadingButton onChange={handleChange} isChecked={status === '독서중'} />
      <WishButton onChange={handleChange} isChecked={status === '희망 도서'} />
    </div>
  );
});

export default ReadingStateButtons;

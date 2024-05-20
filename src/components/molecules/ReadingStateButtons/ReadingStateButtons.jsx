import { memo } from 'react';
import { string, func } from 'prop-types';
import DoneButton from '../../atoms/ReadingStateButton/DoneButton/DoneButton';
import WishButton from '../../atoms/ReadingStateButton/WishButton/WishButton';
import ReadingButton from '../../atoms/ReadingStateButton/ReadingButton/ReadingButton';

const ReadingStateButtons = memo(function ReadingStateButtons({
  status,
  onChange,
}) {
  return (
    <div className="flex justify-center gap-2 items-center">
      <DoneButton onChange={onChange} isChecked={status === '완독'} />
      <ReadingButton onChange={onChange} isChecked={status === '독서중'} />
      <WishButton onChange={onChange} isChecked={status === '희망 도서'} />
    </div>
  );
});

ReadingStateButtons.propTypes = {
  status: string.isRequired,
  onChange: func.isRequired,
};

export default ReadingStateButtons;

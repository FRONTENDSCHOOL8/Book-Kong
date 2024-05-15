import { string, func } from 'prop-types';
import DoneButton from '../../atoms/ReadingStateButton/DoneButton/DoneButton';
import ReadingButton from '../../atoms/ReadingStateButton/ReadingButton/ReadingButton';
import WishButton from '../../atoms/ReadingStateButton/WishButton/WishButton';

function ReadingState({ status, onClick }) {
  return (
    <div className="flex justify-center gap-2 items-center">
      <DoneButton onClick={onClick} isActive={status === '완독'} />
      <ReadingButton onClick={onClick} isActive={status === '독서중'} />
      <WishButton onClick={onClick} isActive={status === '희망 도서'} />
    </div>
  );
}

ReadingState.propTypes = {
  status: string.isRequired,
  onClick: func.isRequired,
};

export default ReadingState;

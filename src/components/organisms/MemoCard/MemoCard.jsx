import PropTypes from 'prop-types';
import ContextButtonVertical from '../../atoms/ContextButtonVertical/ContextButtonVertical';
import MemoContents from '../../atoms/MemoContents/MemoContents';
import MemoDate from '../../atoms/MemoDate/MemoDate';
import RecordTitle from '../../molecules/RecordTitle/RecordTitle';

function MemoCard({ title, contents, date }) {
  return (
    <li className="list-shadow">
      <a
        href="/"
        className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative"
      >
        <ContextButtonVertical />
        <RecordTitle title={title} />
        <MemoContents title={contents} />
        <MemoDate date={date} />
      </a>
    </li>
  );
}

MemoCard.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MemoCard;

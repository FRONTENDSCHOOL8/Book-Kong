import PropTypes from 'prop-types';
import ContextButtonVertical from '../../atoms/ContextButtonVertical/ContextButtonVertical';
import MemoContents from '../../atoms/MemoContents/MemoContents';
import MemoDate from '../../atoms/MemoDate/MemoDate';
import RecordTitle from '../../molecules/RecordTitle/RecordTitle';
import { motion } from 'framer-motion';

function MemoCard({ title, contents, date }) {
  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };
  return (
    <motion.li
      variants={cardVar}
      whileHover={{ scale: 1.03 }}
    >
      <a
        href="/"
        className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative list-shadow border border-grayscale-100"
      >
        <ContextButtonVertical />
        <RecordTitle title={title} />
        <MemoContents title={contents} />
        <MemoDate date={date} />
      </a>
    </motion.li>
  );
}

MemoCard.propTypes = {
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MemoCard;

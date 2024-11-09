import PropTypes from 'prop-types';
import MemoContents from '../../atoms/MemoContents/MemoContents';
import MemoDate from '../../atoms/MemoDate/MemoDate';
import RecordTitle from '../../molecules/RecordTitle/RecordTitle';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ContextButton from '../../atoms/ContextButton/ContextButton';

function MemoCard({ title, contents, date, id }) {
  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };
  return (
    <motion.li variants={cardVar} whileHover={{ scale: 1.03 }}>
      <Link
        to={`/record/memo/${id}`}
        className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative list-shadow border border-grayscale-100"
      >
        <RecordTitle title={title} />
        <MemoContents title={contents} />
        <MemoDate date={date} />
        <ContextButton
          shape="vertical"
          ariaLabel="메모에 대한 메뉴더보기 버튼"
          customClassName="top-[6px] right-[6px]"
        />
      </Link>
    </motion.li>
  );
}

MemoCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  contents: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default MemoCard;

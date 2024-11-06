import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import convertDayFormat from '/src/utils/convertDayFormat.js';
import { calcLevel } from '../../../utils/calcLevel';
import { Link } from 'react-router-dom';
import ContextButton from '../../atoms/ContextButton/ContextButton';

function FeedCard({ bookTitle, title, content, date, nickname, book_height }) {
  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };

  return (
    <motion.li variants={cardVar} whileHover={{ scale: 1.03 }}>
      <Link
        to="/feed/detail"
        className="relative flex flex-col w-full gap-4 px-4 py-5 border rounded-lg bg-grayscale-white border-grayscale-100 list-shadow"
      >
        <div className="flex items-center justify-between">
          <span className="contents-xs text-primary-500 clip-text-1">
            {bookTitle}
          </span>
        </div>
        <span className="contents-lg-md text-grayscale-900 clip-text-1">
          {title}
        </span>
        <span className="contents-sm text-grayscale-black clip-text-3">
          {content}
        </span>
        <div className="flex items-center gap-3 pt-4 border-t border-grayscale-200">
          <img
            src={`/images/characters/stage${calcLevel(book_height)}.png`}
            className="w-10 h-10"
          />
          <div className="flex flex-col gap-1">
            <span className="contents-xs text-grayscale-700 clip-text-1">
              {nickname}
            </span>
            <span className="contents-2xs text-grayscale-400">
              {convertDayFormat(date)}
            </span>
          </div>
        </div>
        <ContextButton
          shape="vertical"
          ariaLabel="피드에 대한 메뉴더보기 버튼"
          customClassName="top-[6px] right-[6px]"
        />
      </Link>
    </motion.li>
  );
}

FeedCard.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  book_height: PropTypes.number.isRequired,
};

export default FeedCard;

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import convertDayFormat from '/src/utils/convertDayFormat.js';

function FeedCard({
  bookTitle,
  title,
  content,
  date,
  userInfo: { nickname, book_height },
}) {
  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };
  return (
    <motion.li
      variants={cardVar}
      whileHover={{ scale: 1.03 }}
      className="flex flex-col gap-4 px-4 py-5 bg-grayscale-white border border-primary-500 rounded-lg list-shadow"
    >
      <div className="flex items-center justify-between">
        <span className="contents-xs text-primary-500 clip-text-1">
          {bookTitle}
        </span>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 18.5385C11.725 18.5385 11.4896 18.4406 11.2938 18.2447C11.0979 18.0489 11 17.8135 11 17.5385C11 17.2635 11.0979 17.028 11.2938 16.8322C11.4896 16.6364 11.725 16.5384 12 16.5384C12.275 16.5384 12.5104 16.6364 12.7063 16.8322C12.9021 17.028 13 17.2635 13 17.5385C13 17.8135 12.9021 18.0489 12.7063 18.2447C12.5104 18.4406 12.275 18.5385 12 18.5385ZM12 13C11.725 13 11.4896 12.9021 11.2938 12.7062C11.0979 12.5104 11 12.275 11 12C11 11.725 11.0979 11.4896 11.2938 11.2937C11.4896 11.0979 11.725 11 12 11C12.275 11 12.5104 11.0979 12.7063 11.2937C12.9021 11.4896 13 11.725 13 12C13 12.275 12.9021 12.5104 12.7063 12.7062C12.5104 12.9021 12.275 13 12 13ZM12 7.46154C11.725 7.46154 11.4896 7.36363 11.2938 7.16779C11.0979 6.97196 11 6.73653 11 6.46152C11 6.18652 11.0979 5.9511 11.2938 5.75527C11.4896 5.55943 11.725 5.46152 12 5.46152C12.275 5.46152 12.5104 5.55943 12.7063 5.75527C12.9021 5.9511 13 6.18652 13 6.46152C13 6.73653 12.9021 6.97196 12.7063 7.16779C12.5104 7.36363 12.275 7.46154 12 7.46154Z"
              fill="#F24822"
            />
          </svg>
        </button>
      </div>
      <span className="contents-lg-bold text-grayscale-900 clip-text-1">
        {title}
      </span>
      <span className="contents-sm text-grayscale-black clip-text-3">
        {content}
      </span>
      <div className="flex border-t border-grayscale-200 pt-4 items-center gap-3">
        <span>{book_height}</span>
        <div className="flex flex-col">
          <span className="contents-xs text-grayscale-700 clip-text-1">
            {nickname}
          </span>
          <span className="contents-2xs text-grayscale-400">
            {convertDayFormat(date)}
          </span>
        </div>
      </div>
    </motion.li>
  );
}

FeedCard.propTypes = {
  bookTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  userInfo: PropTypes.object.isRequired,
};

export default FeedCard;

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import BookCardImage from '../../atoms/BookCardImage/BookCardImage';
import BookCardInfo from '../BookCardInfo/BookCardInfo';
import { useLocation } from 'react-router-dom';
function BookCard({ book }) {
  const { pathname } = useLocation();

  return (
    <motion.li
      variants={CardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <a
        href={
          pathname === '/library/search'
            ? `/library/book-registration?title=${book.title}&author=${book.author}&publisher=${book.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${book.isbn}&cover=${book.cover}`
            : '/'
        }
        className="flex w-full"
      >
        <BookCardImage data={book} />
        <BookCardInfo data={book} />
      </a>
    </motion.li>
  );
}

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

BookCard.propTypes = {
  book: PropTypes.object,
};

export default BookCard;

import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import BookCardImage from '../../atoms/BookCardImage/BookCardImage';
import BookCardInfo from '../BookCardInfo/BookCardInfo';
import { useLocation } from 'react-router-dom';
function BookCard({ data }) {
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
            ? `/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`
            : '/'
        }
        className="flex w-full"
      >
        <BookCardImage data={data} />
        <BookCardInfo data={data} />
      </a>
    </motion.li>
  );
}

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

BookCard.propTypes = {
  data: PropTypes.object,
};

export default BookCard;

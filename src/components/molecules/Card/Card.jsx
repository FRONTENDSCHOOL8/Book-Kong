import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import CardImage from '../../atoms/CardImage/CardImage';
import CardInfo from '../CardInfo/CardInfo';
import { useLocation } from 'react-router-dom';

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

function Card({ book }) {
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
        <CardImage data={book} />
        <CardInfo data={book} />
      </a>
    </motion.li>
  );
}

Card.propTypes = {
  book: PropTypes.object,
};

export default Card;

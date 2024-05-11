import { memo } from 'react';
import { object } from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BookCardInfo from '../BookCardInfo/BookCardInfo';
import { getRandomNumber } from '../../../utils/getRandomNumber';
import BookCardImage from '../../atoms/BookCardImage/BookCardImage';

const UserBookCard = memo(function UserBookCard({ data }) {
  return (
    <motion.li
      variants={CardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <Link
        to={`/library/book-registration?title=${data.title}&author=${data.author}&publisher=${data.publisher}&page=${getRandomNumber(80, 1200)}&isbn=${data.isbn}&cover=${data.cover}`}
        className="flex w-full"
      >
        <BookCardImage data={data} />
        <BookCardInfo data={data} />
      </Link>
    </motion.li>
  );
});

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

UserBookCard.propTypes = {
  data: object,
};

export default UserBookCard;

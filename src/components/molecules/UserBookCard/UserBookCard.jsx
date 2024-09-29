import { memo } from 'react';
import { object } from 'prop-types';
import { motion } from 'framer-motion';
import BookCardInfo from '../BookCardInfo/BookCardInfo';
import BookCardImage from '../../atoms/BookCardImage/BookCardImage';
import { Link } from 'react-router-dom';

const UserBookCard = memo(function UserBookCard({ record: userLibRecord }) {
  return (
    <motion.li
      variants={CardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <Link
        to={`/library/book-detail/${userLibRecord.id}`}
        className="flex w-full"
      >
        <BookCardImage data={userLibRecord} />
        <BookCardInfo data={userLibRecord} />
      </Link>
    </motion.li>
  );
});

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

UserBookCard.propTypes = {
  record: object.isRequired,
};

export default UserBookCard;

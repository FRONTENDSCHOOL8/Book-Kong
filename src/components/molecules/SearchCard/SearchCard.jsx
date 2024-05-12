import { motion } from 'framer-motion';
import { object } from 'prop-types';
import SearchCardImage from '../../atoms/SearchCardImage/SearchCardImage';
import BookCardInfo from '../BookCardInfo/BookCardInfo';
function SearchCard({ data }) {
  return (
    <motion.li
      variants={CardVar}
      whileHover={{ scale: 1.02 }}
      className={' list-shadow bg-grayscale-white overflow-hidden rounded-lg'}
    >
      <a
        href={`/library/book-registration/:${data.isbn13}`}
        className="flex w-full"
      >
        <SearchCardImage data={data} />
        <BookCardInfo data={data} />
      </a>
    </motion.li>
  );
}

const CardVar = {
  start: { y: 20 },
  end: { y: 0 },
};

SearchCard.propTypes = {
  data: object,
};

export default SearchCard;

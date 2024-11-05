import { motion } from 'framer-motion';
import PropTypes, { object } from 'prop-types';
import SearchCard from '../../molecules/SearchCard/SearchCard';
function SearchList({ data }) {
  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3"
    >
      {data?.map((book) =>
        book?.page_data.item.map((book) => (
          <SearchCard key={book.isbn13} data={book} />
        ))
      )}
    </motion.ul>
  );
}

const ListVar = {
  start: { opacity: 0 },
  end: {
    opacity: 1,
    transition: { type: 'spring', mass: 0.8, staggerChildren: 0.05 },
  },
};

SearchList.propTypes = {
  data: PropTypes.arrayOf(object),
};

export default SearchList;

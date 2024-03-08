import SearchCard from '../../molecules/SearchCard/SearchCard';
import { motion } from 'framer-motion';
import PropTypes, { object } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function SearchList({ data }) {
  const searchListVar = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: { type: 'spring', mass: 0.8, staggerChildren: 0.05 },
    },
  };
  return (
    <motion.ul
      variants={searchListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3 mt-8"
    >
      {data?.map((book) => (
        <SearchCard key={uuidv4()} data={book} />
      ))}
    </motion.ul>
  );
}

SearchList.propTypes = {
  data: PropTypes.arrayOf(object),
};

export default SearchList;

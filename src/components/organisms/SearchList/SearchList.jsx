import { motion } from 'framer-motion';
import { bool, exact, array } from 'prop-types';
import SearchCard from '../../molecules/SearchCard/SearchCard';
import { useAladinDataInit } from '../../../hooks/useAladinDataInit';

function SearchList({ data, isStale, isFetching }) {
  const aladinBookData = useAladinDataInit(data);
  const isDataEmpty = aladinBookData.length === 0;

  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className={`flex flex-col gap-3 ${!isDataEmpty || isStale || isFetching ? 'opacity-70' : 'opacity-100'}`}
    >
      {aladinBookData.map((book) => (
        <SearchCard key={book.isbn13} data={book} />
      ))}
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
  data: exact({
    pageParams: array,
    pages: array,
  }),
  isStale: bool,
  isFetching: bool,
};

export default SearchList;

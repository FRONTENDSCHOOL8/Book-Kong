import BookCard from '../../molecules/BookCard/BookCard';
import { motion } from 'framer-motion';
import PropTypes, { object } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function List({ data }) {
  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3"
    >
      {data?.map((book) => (
        <BookCard key={uuidv4()} data={book} />
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

List.propTypes = {
  data: PropTypes.arrayOf(object),
};

export default List;

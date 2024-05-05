import Card from '../../molecules/Card/Card';
import { motion } from 'framer-motion';
import { arrayOf, object, bool } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
function List({ data, isLoading = false }) {
  const ListVar = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: { type: 'spring', mass: 0.8, staggerChildren: 0.05 },
    },
  };
  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3"
    >
      {data?.map((book) => (
        <Card key={uuidv4()} data={book} isLoading={isLoading} />
      ))}
    </motion.ul>
  );
}

List.propTypes = {
  data: arrayOf(object),
  isLoading: bool,
};

export default List;

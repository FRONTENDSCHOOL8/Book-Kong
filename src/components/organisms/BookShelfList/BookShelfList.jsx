import { Skeleton } from '@mui/material';
import BookCard from '../../molecules/BookCard/BookCard';
import { motion } from 'framer-motion';
import { arrayOf, object } from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function BookShelfList({ data }) {
  // data가 넘어오지 않았을 때 skeleton UI를 보여주는 기능 아직 구현 못 함. 해당 기능 구현 필요.
  if (!data) {
    return (
      <Skeleton
        variant="rounded"
        sx={{ borderRadius: '0.5rem', width: 1, height: 130 }}
      />
    );
  }

  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3"
    >
      {data.map((book) => (
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

BookShelfList.propTypes = {
  data: arrayOf(object),
};

export default BookShelfList;

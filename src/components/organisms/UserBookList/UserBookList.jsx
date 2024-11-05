import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';
import { arrayOf, object, bool } from 'prop-types';
import UserBookCard from '../../molecules/UserBookCard/UserBookCard';

function UserBookList({ data: userLibData, isLoading = false }) {
  if (isLoading) {
    return (
      <motion.ul
        variants={ListVar}
        initial="start"
        animate="end"
        className="flex flex-col gap-3"
      >
        {[...Array(3)].map((_, index) => (
          <li key={index}>
          <Skeleton
            variant="rounded"
            sx={{ borderRadius: '0.5rem', width: 1, height: 130 }}
          />
        </li>
        ))}
      </motion.ul>
    );
  }

  return (
    <motion.ul
      variants={ListVar}
      initial="start"
      animate="end"
      className="flex flex-col gap-3"
    >
      {userLibData.map((record) => (
        <UserBookCard key={record.id} record={record} />
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

UserBookList.propTypes = {
  data: arrayOf(object),
  isLoading: bool,
};

export default UserBookList;

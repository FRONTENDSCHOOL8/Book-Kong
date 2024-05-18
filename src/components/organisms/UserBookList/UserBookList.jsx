import { motion } from 'framer-motion';
import { Skeleton } from '@mui/material';
import { arrayOf, object } from 'prop-types';
import UserBookCard from '../../molecules/UserBookCard/UserBookCard';

function UserBookList({ data: userLibData }) {
  // data가 넘어오지 않았을 때 skeleton UI를 보여주는 기능 아직 구현 못 함. 해당 기능 구현 필요.
  if (!userLibData) {
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
};

export default UserBookList;

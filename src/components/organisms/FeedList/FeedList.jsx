import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserFeedData } from '../../../utils/controlFeedData';
import { motion } from 'framer-motion';
import FeedCard from '../FeedCard/FeedCard';

function FeedList() {
  const { data } = useQuery({
    queryKey: ['feed', loginUserData],
    queryFn: async () => getUserFeedData(),
    staleTime: 1000 * 60 * 5,
  });

  const listVar = {
    start: { opacity: 0 },
    end: {
      opacity: 1,
      transition: {
        type: 'spring',
        mass: 0.8,
        staggerChildren: 0.03,
      },
    },
  };

  console.log(data);

  return (
    <motion.ul variants={listVar} initial="start" animate="end">
      {data?.map((feed) => (
        <FeedCard
          key={feed.id}
          title={feed.expand.book_id.title}
          contents={feed.content}
          date={feed.created}
        />
      ))}
    </motion.ul>
  );
}

FeedList.propTypes = {};

export default FeedList;

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

  return (
    <main className="mx-4  pt-[88px] pb-[120px]">
      <motion.ul
        variants={listVar}
        initial="start"
        animate="end"
        className="flex flex-col gap-3"
      >
        {data?.map((feed) => (
          <FeedCard
            key={feed.id}
            bookTitle={feed.expand.book_id.title}
            title={feed.title}
            content={feed.content}
            date={feed.created}
            userInfo={feed.expand.book_id.expand.user_id}
          />
        ))}
      </motion.ul>
    </main>
  );
}

FeedList.propTypes = {};

export default FeedList;

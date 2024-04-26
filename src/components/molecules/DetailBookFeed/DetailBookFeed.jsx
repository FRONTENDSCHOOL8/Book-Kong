// import PropTypes from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserFeedData } from '../../../utils/controlFeedData';
import { motion } from 'framer-motion';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { useState, useEffect } from 'react';

function DetailBookFeed() {
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

  const [listCount, setListCount] = useState(0);

  useEffect(() => {
    setListCount(data?.length || 0);
  }, [data]);

  return (
    <div
      className="before:content-[''] before:block before:h-3 before:border-t before:border-b before:border-grayscale-100 before:mb-10 before:bg-background-gray mt-3 bg-grayscale-white pb-[56px]"
      id="feed"
    >
      <div className="flex gap-2 mx-4">
        <h4 className="contents-lg-md text-grayscale-400">피드</h4>
        <span className="font-bold text-primary-500 contents-lg-md">
          {listCount}
        </span>
      </div>
      <div className="pt-6 pb-8 mx-4">
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
      </div>
    </div>
  );
}

DetailBookFeed.propTypes = {};

export default DetailBookFeed;

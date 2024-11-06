import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getAllFeedsRec } from '../../../utils/controlFeedData';
import { motion } from 'framer-motion';
import FeedCard from '../FeedCard/FeedCard';
import { Skeleton } from '@mui/material';

function FeedList() {
  const { data: feedsRecs, isLoading } = useQuery({
    queryKey: ['feeds', loginUserData],
    queryFn: () => getAllFeedsRec(),
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

  const cardVar = {
    start: { y: 30 },
    end: { y: 0 },
  };

  return (
    <main className="mx-4  pt-[88px] pb-[120px]">
      <motion.ul
        variants={listVar}
        initial="start"
        animate="end"
        className="flex flex-col gap-3"
      >
        {isLoading
          ? [...Array(3)].map((_, index) => (
              <motion.li
                key={index}
                variants={cardVar}
                whileHover={{ scale: 1.03 }}
              >
                <Skeleton
                  variant="rounded"
                  sx={{ borderRadius: '0.5rem', width: 1, height: 216 }}
                >
                  <div className="flex flex-col w-full gap-4 px-4 py-5 border rounded-lg bg-grayscale-white border-grayscale-100"></div>
                </Skeleton>
              </motion.li>
            ))
          : feedsRecs?.map((feedsRec) => (
              <FeedCard
                key={feedsRec.id}
                bookTitle={feedsRec.book_title}
                title={feedsRec.feed_title}
                content={feedsRec.content}
                date={feedsRec.created}
                nickname={feedsRec.expand?.user_id.nickname}
                book_height={feedsRec.expand?.user_id.book_height}
                isLoading={isLoading}
              />
            ))}
      </motion.ul>
    </main>
  );
}

export default FeedList;

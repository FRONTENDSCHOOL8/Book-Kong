import { string, shape } from 'prop-types';
import { useQuery } from '@tanstack/react-query';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserFeedData } from '../../../utils/controlFeedData';
import { motion } from 'framer-motion';
import FeedCard from '../../organisms/FeedCard/FeedCard';
import { useState, useEffect } from 'react';
import WriteMemoIconButton from '../../atoms/WriteMemoIconButton/WriteMemoIconButton';
import NoneCardState from '../NoneCardState/NoneCardState';

function DetailBookFeed({ data: bookData }) {
  const { data } = useQuery({
    queryKey: ['feed-detail', loginUserData, bookData.id],
    queryFn: async () => {
      const feedData = await getUserFeedData();

      const filteredData = feedData?.filter(
        (feed) => feed.expand.book_id.id === bookData.id
      );

      return filteredData;
    },
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
    <section
      className="before:border-b before:content-[''] before:block before:pt-[111px] mt-[-111px] border-b"
      id="feed"
    >
      <div className="pb-8 bg-grayscale-white ">
        <div className="flex items-center justify-between pt-8 mx-4">
          <div className="flex gap-2">
            <h4 className="contents-lg-bold text-grayscale-900">피드</h4>
            <span className="font-bold align-middle text-primary-500 contents-lg-bold">
              {listCount}
            </span>
          </div>
          <a href="/feed" className="text-grayscale-500 contents-sm-bold">
            전체보기
          </a>
        </div>
        <div className="flex flex-col items-end px-4 pb-[56px] ">
          <div className="flex items-center justify-end w-full mt-6 mb-4">
            <WriteMemoIconButton />
          </div>
          <motion.ul
            variants={listVar}
            initial="start"
            animate="end"
            className="flex flex-col w-full gap-4"
          >
            {data?.length !== 0 ? (
              data?.map((feed) => (
                <FeedCard
                  key={feed.id}
                  bookTitle={feed.expand.book_id.title}
                  title={feed.title}
                  content={feed.content}
                  date={feed.created}
                  nickname={feed.expand.book_id.expand.user_id.nickname}
                  book_height={feed.expand.book_id.expand.user_id.book_height}
                />
              ))
            ) : (
              <NoneCardState data="feed" />
            )}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

DetailBookFeed.propTypes = {
  data: shape({
    id: string.isRequired,
  }),
};

export default DetailBookFeed;

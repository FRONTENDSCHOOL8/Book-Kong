import { useQuery } from '@tanstack/react-query';
import SortingBtn from '../../molecules/SortingBtn/SortingBtn';
import MemoCard from '../MemoCard/MemoCard';
import { loginUserRecId } from '../../../utils/controlUserData';
import { getAllUserMemos } from '../../../utils/controlMemoData';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Skeleton } from '@mui/material';
import { useToggleSorting } from '../../../hooks/useToggleSorting';

function MemoList() {
  const { data: serverMemos, isLoading } = useQuery({
    queryKey: ['memos', loginUserRecId],
    queryFn: getAllUserMemos,
  });

  const {
    copiedData: localMemos,
    sortState,
    handleSort: handleMemoSort,
  } = useToggleSorting({
    sortState: ['오래된 순', '최신순'],
    serverData: serverMemos,
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
    <motion.main className="flex flex-col items-end bg-background-gray px-4 pb-[120px] overflow-scroll hide-scrollbar">
      <Helmet>
        <title>책콩 | 메모</title>
      </Helmet>
      <SortingBtn
        sortState={sortState}
        onClick={handleMemoSort}
        customClassName="mt-6 mb-3"
      />
      <motion.ul
        variants={listVar}
        initial="start"
        animate="end"
        className="flex flex-col w-full gap-3"
      >
        {isLoading || !localMemos ? (
          <>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: '0.5rem', width: 1, height: 180 }}
            >
              <li className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative border border-grayscale-100"></li>
            </Skeleton>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: '0.5rem', width: 1, height: 180 }}
            >
              <li className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative border border-grayscale-100"></li>
            </Skeleton>
            <Skeleton
              variant="rounded"
              sx={{ borderRadius: '0.5rem', width: 1, height: 180 }}
            >
              <li className="flex flex-col gap-[10px] bg-grayscale-white px-4 py-5 rounded-lg relative border border-grayscale-100"></li>
            </Skeleton>
          </>
        ) : (
          localMemos.map((memo) => (
            <MemoCard
              key={memo.id}
              id={memo.id}
              title={memo.book_title}
              contents={memo.content}
              date={memo.created}
            />
          ))
        )}
      </motion.ul>
    </motion.main>
  );
}

export default MemoList;

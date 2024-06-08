import { useQuery } from '@tanstack/react-query';
import OrderButton from '../../molecules/OrderButton/OrderButton';
import MemoCard from '../MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

function MemoList() {
  const initialOrder = localStorage.getItem('order') || '최신순';

  const [order, setOrder] = useState(initialOrder);

  const toggleSort = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    if (order === '최신순') {
      setOrder('오래된순');
      data.reverse();
    } else {
      setOrder('최신순');
      data.reverse();
    }
  };

  useEffect(() => {
    localStorage.setItem('order', order);
  }, [order]);

  const { data } = useQuery({
    queryKey: ['memo', loginUserData],
    queryFn: async () =>
      getUserMemoData(order === '최신순' ? 'created' : '-created'),
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
    <motion.main className="flex flex-col items-end bg-background-gray px-4 pb-[120px] overflow-scroll hide-scrollbar">
      <Helmet>
        <title>책콩 | 기록 페이지 - 메모</title>
      </Helmet>
      <OrderButton onClick={toggleSort} order={order} />
      <motion.ul
        variants={listVar}
        initial="start"
        animate="end"
        className="flex flex-col w-full gap-3"
      >
        {data?.map((memo) => (
          <MemoCard
            key={memo.id}
            id={memo.id}
            title={memo.expand.book_id.title}
            contents={memo.content}
            date={memo.created}
          />
        ))}
      </motion.ul>
    </motion.main>
  );
}

export default MemoList;

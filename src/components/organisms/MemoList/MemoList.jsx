import { useQuery } from '@tanstack/react-query';
import OrderButton from '../../molecules/OrderButton/OrderButton';
import MemoCard from '../MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

function MemoList() {
  const initialOrder = localStorage.getItem('order') || '최신순';
  const [order, setOrder] = useState(initialOrder);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const {
    data: newData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['memo', loginUserData.id],
    queryFn: async () =>
      getUserMemoData(page, order === '최신순' ? 'created' : '-created'),
    staleTime: 1000 * 60 * 5,
  });

  const toggleSort = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    if (order === '최신순') {
      setOrder('오래된순');
      setData((prevData) => [...prevData].reverse());
    } else {
      setOrder('최신순');
      setData((prevData) => [...prevData].reverse());
    }
  };

  useEffect(() => {
    localStorage.setItem('order', order);
  }, [order]);

  useEffect(() => {
    if (!isLoading && newData) {
      setData((prevData) => [...prevData, ...newData]);
    }
  }, [isLoading, newData]);

  useEffect(() => {
    refetch();
  }, [page]);

  console.log('current', data);

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

  const handleClick = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <motion.main className="flex flex-col items-end bg-background-gray px-4 pb-[200px] overflow-scroll h-screen">
      <OrderButton onClick={toggleSort} order={order} />
      <motion.ul
        variants={listVar}
        initial="start"
        animate="end"
        className="flex flex-col gap-3 w-full"
      >
        {data?.map((memo) => (
          <MemoCard
            key={memo.id}
            title={memo.expand.book_id.title}
            contents={memo.content}
            date={memo.created}
          />
        ))}
        <button onClick={handleClick}>클릭</button>
      </motion.ul>
    </motion.main>
  );
}

export default MemoList;

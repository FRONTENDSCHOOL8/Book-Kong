// import PropTypes from "prop-types";
import { useQuery } from '@tanstack/react-query';
import OrderButton from '../OrderButton/OrderButton';
import MemoCard from '../../organisms/MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';



function DetailBookMemo() {
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
  
  const [listCount, setListCount] = useState(0);
  // const dataList = []; // 여기에 리스트 데이터가 들어간다고 가정합니다.

  useEffect(() => {
    setListCount(data?.length || 0);
  }, [data]);

  
  return (
    <div className="pb-8 bg-grayscale-white before:content-[''] before:block before:h-3 before:border-t before:border-b before:border-grayscale-100 before:mb-10 before:bg-background-gray" id="memo">
      <div className="flex gap-2 mx-4">
        <h4 className="contents-lg-bold text-grayscale-400">메모</h4>
        <span className="font-bold align-middle text-primary-500 contents-lg-bold">{listCount}</span>
      </div>
      <motion.main className="flex flex-col items-end px-4 pb-[56px] ">
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
              title={memo.expand.book_id.title}
              contents={memo.content}
              date={memo.created}
            />
          ))}
        </motion.ul>
      </motion.main>
      
      
    </div>
  );
}

// DetailBookMemo.propTypes = { 
  
//  };

export default DetailBookMemo;
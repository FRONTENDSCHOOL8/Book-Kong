import { useQuery } from '@tanstack/react-query';
import OrderButton from '../OrderButton/OrderButton';
import MemoCard from '../../organisms/MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import WriteMemoIconButton from '../../atoms/WriteMemoIconButton/WriteMemoIconButton';

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

  useEffect(() => {
    setListCount(data?.length || 0);
  }, [data]);

  return (
    <section
      className="before:border-b before:content-[''] before:block before:pt-[111px] mt-[-111px] border-b"
      id="memo"
    >
      <div className="pb-8 bg-grayscale-white ">
        <div className="flex items-center justify-between pt-8 mx-4">
          <div className="flex gap-2">
            <h4 className="contents-lg-bold text-grayscale-900">메모</h4>
            <span className="font-bold align-middle text-primary-500 contents-lg-bold">
              {listCount}
            </span>
          </div>
          <a
            href="/record/memo"
            className="text-grayscale-500 contents-sm-bold"
          >
            전체보기
          </a>
        </div>
        <div className="flex flex-col items-end px-4 pb-[56px] ">
          <div className="flex items-center justify-between w-full mt-6 mb-4">
            <OrderButton onClick={toggleSort} order={order} />
            <WriteMemoIconButton />
          </div>
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
        </div>
      </div>
    </section>
  );
}

export default DetailBookMemo;

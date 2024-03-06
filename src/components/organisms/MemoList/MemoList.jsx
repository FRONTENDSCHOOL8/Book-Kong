import { useQuery } from '@tanstack/react-query';
import OrderButton from '../../molecules/OrderButton/OrderButton';
import MemoCard from '../MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';
import { useState } from 'react';
import { useEffect } from 'react';

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

  return (
    <main className="flex flex-col items-end bg-background-gray px-4 h-[115vh]">
      <OrderButton onClick={toggleSort} order={order} />
      <ul className="flex flex-col gap-3 w-full">
        {data?.map((memo) => (
          <MemoCard
            key={memo.id}
            title={memo.expand.book_id.title}
            contents={memo.content}
            date={memo.created}
          />
        ))}
      </ul>
    </main>
  );
}

export default MemoList;

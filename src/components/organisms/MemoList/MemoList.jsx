import { useQuery } from '@tanstack/react-query';
import OrderButton from '../../molecules/OrderButton/OrderButton';
import MemoCard from '../MemoCard/MemoCard';
import { loginUserData } from '../../../utils/controlUserData';
import { getUserMemoData } from '../../../utils/controlMemoData';

function MemoList() {
  const { data } = useQuery({
    queryKey: ['memo', loginUserData],
    queryFn: async () => getUserMemoData(),
  });

  return (
    <main className="flex flex-col items-end bg-background-gray px-4 h-screen">
      <OrderButton />
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

import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import pb from '../../../api/pocketbase';
import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';

function MemoDetailPage() {
  const { memoId } = useParams();
  const { data } = useQuery({
    queryKey: ['memo', memoId],
    queryFn: async () => {
      const data = await pb
        .collection('memos')
        .getOne(memoId, { expand: 'book_id' });
      return data;
    },
    initialData: {
      expand: {
        book_id: {
          title: 'Loading...', // 임시 제목
        },
      },
      content: 'Loading...',
      updated: '',
    },
  });

  return (
    <>
      <Helmet>
        <title>책콩 | 메모</title>
      </Helmet>
      <Header title={'메모'} />
      <main className="px-4 my-2 h-full bg-white">
        <div className=" text-grayscale-500 text-right pt-6">
          {data.updated?.slice(0, 10)}
        </div>
        <div className=" flex text-xm mt-6 text-[#F24822] font-normal">
          <svg
            className=" mr-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.85714 2C3.28125 2 2 3.28125 2 4.85714V19.1429C2 20.7188 3.28125 22 4.85714 22H14.8571V17C14.8571 15.817 15.817 14.8571 17 14.8571H22V4.85714C22 3.28125 20.7188 2 19.1429 2H4.85714ZM22 16.2857H19.9777H17C16.6071 16.2857 16.2857 16.6071 16.2857 17V19.9777V22L17.7143 20.5714L20.5714 17.7143L22 16.2857Z"
              fill="#F24822"
            />
          </svg>

          {data?.expand.book_id.title}
        </div>
        <div className=" h-full whitespace-pre-wrap mt-4 contents-sm">
          {data.content}
        </div>
      </main>
    </>
  );
}

export default MemoDetailPage;

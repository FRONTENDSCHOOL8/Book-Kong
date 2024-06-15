import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import convertDayFormat from '../../../utils/convertDayFormat';
import { useLoaderData } from 'react-router-dom';

function MemoDetailPage() {
  const memoId = useLoaderData();

  console.log(memoId);
  return (
    <>
      <Helmet>
        <title>책콩 | 메모</title>
      </Helmet>
      <Header title={'메모'} />
      <main className="min-h-screen pb-[63px] pt-[65px]">
        <article className="px-4 py-6 border-y bg-grayscale-white border-1 border-grayscale-200 full-height">
          <div className="text-right text-grayscale-500">
            {convertDayFormat(memoId.created)}
          </div>
          <div className=" flex text-xm mt-6 text-[#F24822] font-normal">
            <svg
              className="mr-2 "
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
            {memoId?.expand?.book_id?.title}
          </div>
          <div className="mt-4 whitespace-pre-wrap contents-sm">
            {memoId.content}
          </div>
        </article>
      </main>
    </>
  );
}

export default MemoDetailPage;

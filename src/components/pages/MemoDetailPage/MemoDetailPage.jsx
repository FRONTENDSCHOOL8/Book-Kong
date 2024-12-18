import { Helmet } from 'react-helmet-async';
import Header from '../../organisms/Header/Header/Header';
import convertDayFormat from '../../../utils/convertDayFormat';
import { useLoaderData } from 'react-router-dom';

function MemoDetailPage() {
  const memo = useLoaderData();

  return (
    <>
      <Helmet>
        <title>책콩 | 메모</title>
      </Helmet>
      <Header title={'메모'} />
      <main className="min-h-screen pb-[63px] pt-[65px]">
        <article className="px-4 py-6 border-y bg-grayscale-white border-1 border-grayscale-200 full-height">
          <header className="relative memo-icon before:bottom-[2px]">
            <time className="block text-right text-grayscale-500 contents-sm">
              {convertDayFormat(memo?.created)}
            </time>
            <strong className=" flex text-xm mt-6 pl-[26px] text-[#F24822] contents-sm-bold">
              {memo?.book_title}
            </strong>
          </header>
          <p className="mt-4 whitespace-pre-wrap contents-md">
            {memo?.content}
          </p>
        </article>
      </main>
    </>
  );
}

export default MemoDetailPage;

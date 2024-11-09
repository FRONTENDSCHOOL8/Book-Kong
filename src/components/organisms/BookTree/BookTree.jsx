import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import BookInfo from '../../molecules/BookInfo/BookInfo';
import Character from '../../molecules/Character/Character';
import ContextButton from '../../atoms/ContextButton/ContextButton';
import BookBlockList from './../../organisms/BookBlockList/BookBlockList';
import { getAllUserLibRecs } from '/src/utils/controlBookData';
import { loginUserData } from '../../../utils/controlUserData';

function BookTree() {
  const { data, isLoading } = useQuery({
    queryKey: ['library', loginUserData],
    queryFn: getAllUserLibRecs,
    select: (userLibRecs) =>
      userLibRecs.filter((userLibRec) => userLibRec.status === '완독'),
  });

  // 유저의 다 읽은 책 권수 계산
  const userFinishBookNum = data?.length || 0;

  // 유저의 다 읽은 책 페이지 합계
  let userTotalPage = 0;

  if (data) {
    for (const book of data) {
      userTotalPage += book.total_page;
    }
  }

  return (
    <main className="min-h-screen bg-grayscale-white relative justify-end flex flex-col pt-[120px] pb-[50px] px-4">
      <Helmet>
        <title>책콩 | 서재 - 책나무</title>
      </Helmet>
      <div className="pt-[120px] overflow-auto">
        {/* 웹 브라우저에서 위치조정을 위해 컨테이너 추가 */}
        <div className="max-w-[448px] w-full min-w-[320px] fixed left-[50%] -translate-x-1/2 top-[120px] z-20 pl-4 pr-[76px]">
          <BookInfo
            isLoading={isLoading}
            page={userTotalPage}
            bookNum={userFinishBookNum}
          />
        </div>
        <Character page={userTotalPage} isLoading={isLoading} />
        <BookBlockList data={data} isLoading={isLoading} />
        {/* 웹 브라우저에서 위치조정을 위해 컨테이너 추가 */}
        <div className="max-w-[448px] w-full min-w-[320px] fixed left-[50%] -translate-x-1/2 top-[120px] z-20">
          <ContextButton
            shape="horizontal"
            ariaLabel="책나무 이미지 저장"
            customClassName="right-4"
          />
        </div>
      </div>
    </main>
  );
}

export default BookTree;

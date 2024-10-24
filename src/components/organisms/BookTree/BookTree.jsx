import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import BookInfo from '../../molecules/BookInfo/BookInfo';
import Character from '../../molecules/Character/Character';
import ContextButton from '../../atoms/ContextButton/ContextButton';
import BookBlockList from './../../organisms/BookBlockList/BookBlockList';
import { getUserLibraryData } from '/src/utils/controlBookData';

function BookTree() {
  const { data, isLoading } = useQuery({
    queryKey: ['book'],
    queryFn: () => getUserLibraryData('완독'),
  });

  // 유저의 다 읽은 책 권수 계산
  const userFinishBookNum = data?.length;

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
        <div className="flex absolute top-[120px] left-0 justify-between px-4 w-full">
          <BookInfo
            isLoading={isLoading}
            page={userTotalPage}
            bookNum={userFinishBookNum}
          />
          <ContextButton shape="horizontal" alt="책나무 이미지 저장 버튼" />
        </div>
        <Character page={userTotalPage} />
        <BookBlockList data={data} />
      </div>
    </main>
  );
}

export default BookTree;

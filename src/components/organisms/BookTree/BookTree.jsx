import BookBlockList from './../../molecules/BookBlockList/BookBlockList';
import SaveBookImg from './../../atoms/SaveBookImg/SaveBookImg';
import BookInfo from '../../molecules/BookInfo/BookInfo';
import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '/src/utils/controlBookData';
import CharacterInfo from '../../molecules/CharacterInfo/CharacterInfo';

function BookTree() {
  const { data, isLoading } = useQuery({
    queryKey: ['book'],
    queryFn: async () => getUserLibraryData('완독'),
  });

  // 유저의 다 읽은 책 권수 계산
  const totalBookCount = data?.length;

  // 유저의 다 읽은 책 페이지 합계
  let totalBookHeight = 0;

  if (data) {
    for (const pages of data) {
      totalBookHeight += pages.total_page;
    }
  }

  return (
    <main className="h-screen bg-grayscale-white relative justify-end flex flex-col pt-[166px] pb-[50px] px-4 ">
      <div className="flex absolute top-[120px] left-0 justify-between px-4 w-full">
        <BookInfo
          isLoading={isLoading}
          height={totalBookHeight}
          count={totalBookCount}
        />
        <SaveBookImg />
      </div>
      <CharacterInfo height={totalBookHeight} />
      <BookBlockList data={data} />
    </main>
  );
}

export default BookTree;

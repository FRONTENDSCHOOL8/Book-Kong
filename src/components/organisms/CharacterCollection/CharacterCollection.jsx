import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '/src/utils/controlBookData';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';

function CharacterCollection() {
  const { data } = useQuery({
    queryKey: ['book'],
    queryFn: async () => getUserLibraryData('done'),
  });

  // 유저의 다 읽은 책 페이지 합계
  let totalBookHeight = 0;

  if (data) {
    for (const pages of data) {
      totalBookHeight += pages.total_page;
    }
  }

  return (
    <main className="h-screen bg-background-gray relative justify-end flex flex-col  px-4 ">
      <div className="flex absolute top-4 left-0 justify-between px-4 w-full flex-col gap-4">
        <UserCharacterCard height={totalBookHeight} />
        <CharacterList height={totalBookHeight} />
      </div>
    </main>
  );
}

export default CharacterCollection;

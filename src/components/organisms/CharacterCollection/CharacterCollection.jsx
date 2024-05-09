import { useQuery } from '@tanstack/react-query';
import { getUserLibraryData } from '/src/utils/controlBookData';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';

function CharacterCollection() {
  const { data } = useQuery({
    queryKey: ['book'],
    queryFn: () => getUserLibraryData('완독'),
  });

  // 유저의 다 읽은 책 페이지 합계
  let userTotalPage = 0;

  if (data) {
    for (const book of data) {
      userTotalPage += book.total_page;
    }
  }

  return (
    <main className=" bg-background-gray relative justify-end flex flex-col  px-4 ">
      <div className="flex justify-between pt-[76px] pb-[120px] w-full flex-col gap-4">
        <UserCharacterCard page={userTotalPage} />
        <CharacterList page={userTotalPage} />
      </div>
    </main>
  );
}

export default CharacterCollection;

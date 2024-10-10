import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';
import { useLoaderData } from 'react-router-dom';

function CharacterCollection() {
  const userRec = useLoaderData();
  const userLevel = userRec.level - 0;

  return (
    <main className=" bg-background-gray relative justify-end flex flex-col  px-4 ">
      <div className="flex justify-between pt-[76px] pb-[120px] w-full flex-col gap-4">
        <UserCharacterCard level={userLevel} />
        <CharacterList level={userLevel} />
      </div>
    </main>
  );
}

export default CharacterCollection;

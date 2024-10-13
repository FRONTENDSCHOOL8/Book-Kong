import { useState } from 'react';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';
import { useLoaderData } from 'react-router-dom';

function CharacterCollection() {
  const userRec = useLoaderData();
  const userLevel = userRec?.level * 1 || 1;
  const [clickedLv, setClickedLv] = useState(userLevel);
  const handleClick = (e) => {
    const li = e.target.closest('li');
    const cardLv = li.dataset.index * 1 + 1;

    setClickedLv(cardLv);
  };

  return (
    <main className=" bg-background-gray relative justify-end flex flex-col  px-4 ">
      <div className="flex justify-between pt-[76px] pb-[120px] w-full flex-col gap-4">
        <UserCharacterCard clickedLv={clickedLv} />
        <CharacterList level={userLevel} onClick={handleClick} />
      </div>
    </main>
  );
}

export default CharacterCollection;

import { useState } from 'react';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';
import { useLoaderData } from 'react-router-dom';

function CharacterCollection() {
  const userRec = useLoaderData();
  const userLv = userRec?.level * 1 || 1;
  const [clickedLv, setClickedLv] = useState(userLv);
  const handleClick = (e) => {
    const li = e.target.closest('li');
    const cardLv = li.dataset.index * 1 + 1;

    setClickedLv(cardLv);
  };

  return (
    <main className=" bg-background-gray relative justify-end flex flex-col  px-4 ">
      <div className="flex justify-between pt-[76px] pb-[120px] w-full flex-col gap-4">
        <UserCharacterCard userLv={userLv} clickedLv={clickedLv} />
        <CharacterList userLv={userLv} onClick={handleClick} />
      </div>
    </main>
  );
}

export default CharacterCollection;

import { useState } from 'react';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';
import { useLoaderData } from 'react-router-dom';
import { calcLevel } from '../../../utils/calcLevel';

function CharacterCollection() {
  const userRec = useLoaderData();
  const userLv = calcLevel(userRec?.['book_height'] * 1 || 0) || 1;
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
        <CharacterList
          userLv={userLv}
          clickedLv={clickedLv}
          onClick={handleClick}
        />
      </div>
    </main>
  );
}

export default CharacterCollection;

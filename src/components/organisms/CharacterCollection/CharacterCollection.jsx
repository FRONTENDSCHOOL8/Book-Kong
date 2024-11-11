import { useState } from 'react';
import UserCharacterCard from '../../molecules/UserCharacterCard/UserCharacterCard';
import CharacterList from './../../molecules/CharacterList/CharacterList';
import { calcLevel } from '../../../utils/calcLevel';
import { useQuery } from '@tanstack/react-query';
import { getOneUsersRec, loginUserData } from '../../../utils/controlUserData';

function CharacterCollection() {
  const {
    data: userRec,
    error,
    failureCount,
    failureReason,
  } = useQuery({
    queryKey: ['users', loginUserData],
    queryFn: getOneUsersRec,
  });

  // 쿼리 요청 실패 횟수와 실패 이유를 기준으로 error throwing 기능 구현
  if (failureCount >= 1 && failureReason.message.startsWith('Server'))
    throw error;

  if (failureCount === 4) throw error;

  const userLv = calcLevel(userRec?.['book_height'] * 1 || 0) || 1;
  const [clickedLv, setClickedLv] = useState(userLv);
  const handleClick = (e) => {
    const li = e.target.closest('li');
    const cardLv = li.dataset.index * 1 + 1;

    setClickedLv(cardLv);
  };

  return (
    <main className="bg-background-gray relative justify-between flex flex-col w-full pt-[76px] mb-[120px]">
      <UserCharacterCard userLv={userLv} clickedLv={clickedLv} />
      <CharacterList
        userLv={userLv}
        clickedLv={clickedLv}
        onClick={handleClick}
      />
    </main>
  );
}

export default CharacterCollection;

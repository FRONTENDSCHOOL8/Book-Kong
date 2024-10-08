import { number } from 'prop-types';
import CharacterItem from '../../atoms/CharacterItem/CharacterItem';
import characterData from '../../../data/character.json';

import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import { v4 as uuidv4 } from 'uuid';

function CharacterList({ page: userTotalPage }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));

  return (
    <div className="overflow-scroll">
      <ul className="flex gap-4 w-[1184px]">
        {characterData.map((data, index) => (
          <CharacterItem
            key={uuidv4()}
            data={data}
            level={userLevel}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  page: number,
};

export default CharacterList;

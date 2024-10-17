import { number, func } from 'prop-types';
import CharacterItem from '../../atoms/CharacterItem/CharacterItem';
import characterData from '../../../data/character.json';
import { v4 as uuidv4 } from 'uuid';

function CharacterList({ userLv, clickedLv, onClick }) {
  return (
    <div className="overflow-scroll">
      <ul className="flex gap-4 w-[1184px]">
        {characterData.map((data, index) => (
          <CharacterItem
            key={uuidv4()}
            data={data}
            userLv={userLv}
            clickedLv={clickedLv}
            index={index}
            onClick={onClick}
          />
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  userLv: number,
  clickedLv: number,
  onClick: func,
};

export default CharacterList;

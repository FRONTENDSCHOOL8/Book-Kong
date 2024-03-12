import { number } from 'prop-types';
import CharacterCard from '../../atoms/CharacterCard/CharacterCard';
import characterData from '../../../data/character.json';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import { v4 as uuidv4 } from 'uuid';

function CharacterList({ height }) {
  const userLevel = calcLevel(calcCentimeter(height));

  return (
    <div className="overflow-scroll">
      <ul className="flex gap-4 w-[1184px]">
        {characterData.map((data, index) => (
          <CharacterCard
            key={uuidv4()}
            level={userLevel}
            data={data}
            index={index}
          />
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  height: number,
};

export default CharacterList;

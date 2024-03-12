import { number } from 'prop-types';
import CharacterCard from '../../atoms/CharacterCard/CharacterCard';
import { useId } from 'react';
import characterData from '../../../data/character.json';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';

function CharacterList({ height }) {
  const id = useId();
  const userLevel = calcLevel(calcCentimeter(height));

  return (
    <div className="overflow-scroll">
      <ul className="flex gap-4 w-[1184px]">
        {characterData.map((data, index) => (
          <CharacterCard key={id} level={userLevel} data={data} index={index} />
        ))}
      </ul>
    </div>
  );
}

CharacterList.propTypes = {
  height: number,
};

export default CharacterList;

import { number } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import characterData from '../../../data/character.json';

function CharacterLevel({ height }) {
  const level = calcLevel(calcCentimeter(height));
  const bookkongLevel = characterData.filter((data) => data.level === level)[0]
    .level;

  return (
    <div className="flex justify-end">
      <span className="contents-md text-primary-500 h-[26px]">
        {bookkongLevel}단계
      </span>
    </div>
  );
}

CharacterLevel.propTypes = {
  height: number,
};

export default CharacterLevel;

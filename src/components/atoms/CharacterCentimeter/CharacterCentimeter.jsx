import { number } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import characterData from '../../../data/character.json';

function CharacterCentimeter({ height }) {
  const level = calcLevel(calcCentimeter(height));
  const bookkongCentimeter = characterData.filter(
    (data) => data.level === level
  )[0].centimeter;

  return (
    <div className="flex justify-end">
      <span className="contents-sm text-grayscale-400">
        {bookkongCentimeter}
      </span>
    </div>
  );
}

CharacterCentimeter.propTypes = {
  height: number,
};

export default CharacterCentimeter;

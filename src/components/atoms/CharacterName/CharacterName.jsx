import { number } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import CharacterData from '../../../data/character.json';

function CharacterName({ height }) {
  const level = calcLevel(calcCentimeter(height));
  const BookkongName = CharacterData.filter((data) => data.level === level)[0]
    .name;

  return <span className="heading-xs text-primary-500">{BookkongName}</span>;
}

CharacterName.propTypes = {
  height: number,
};

export default CharacterName;

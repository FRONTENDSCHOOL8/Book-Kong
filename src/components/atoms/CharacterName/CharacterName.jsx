import { number, string } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import characterData from '../../../data/character.json';

function CharacterName({ height, page }) {
  const level = calcLevel(calcCentimeter(height));
  const BookkongName = characterData.filter((data) => data.level === level)[0]
    .name;

  return (
    <span
      className={
        page === '책나무' ? 'heading-xs text-primary-500' : 'heading-xs'
      }
    >
      {BookkongName}
    </span>
  );
}

CharacterName.propTypes = {
  height: number,
  page: string,
};

export default CharacterName;

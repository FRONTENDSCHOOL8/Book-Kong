import { number } from 'prop-types';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import characterData from '../../../data/character.json';

function CharacterHeight({ page: userTotalPage }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));
  const characterHeight = characterData.filter(
    (data) => data.level === userLevel
  )[0].height;

  return (
    <div className="flex justify-end">
      <span className="contents-sm text-grayscale-400">{characterHeight}</span>
    </div>
  );
}

CharacterHeight.propTypes = {
  page: number,
};

export default CharacterHeight;

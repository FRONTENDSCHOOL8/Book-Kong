import { number } from 'prop-types';
import {
  calcUserBookHeight,
  calcUserLevel,
} from '../../../utils/calcUserLevel';
import characterData from '../../../data/character.json';

function CharacterLevel({ page: userTotalPage }) {
  const userLevel = calcUserLevel(calcUserBookHeight(userTotalPage));
  const characterLevel = characterData.filter(
    (data) => data.level === userLevel
  )[0].level;

  return (
    <div className="flex justify-end">
      <span className="contents-md text-primary-500 h-[26px]">
        {characterLevel}단계
      </span>
    </div>
  );
}

CharacterLevel.propTypes = {
  page: number,
};

export default CharacterLevel;

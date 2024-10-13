import { number } from 'prop-types';
import {
  calcUserBookHeight,
  calcUserLevel,
} from '../../../utils/calcUserLevel';

function CharacterLevel({ page: userTotalPage }) {
  const userLevel = calcUserLevel(calcUserBookHeight(userTotalPage));

  return (
    <div className="flex justify-end">
      <span className="contents-md text-primary-500 h-[26px]">
        {userLevel}단계
      </span>
    </div>
  );
}

CharacterLevel.propTypes = {
  page: number,
};

export default CharacterLevel;

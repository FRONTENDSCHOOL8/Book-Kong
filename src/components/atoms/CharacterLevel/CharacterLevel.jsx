import { number } from 'prop-types';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';

function CharacterLevel({ page: userTotalPage }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));

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

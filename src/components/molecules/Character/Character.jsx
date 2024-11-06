import { number, bool } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';

function Character({ page: userTotalPage, isLoading }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));

  return isLoading ? (
    ''
  ) : (
    <div className="flex flex-col justify-center items-center">
      <CharacterName level={userLevel} pageName="책나무" />
      <CharacterImg level={userLevel} />
    </div>
  );
}

Character.propTypes = {
  page: number,
  isLoading: bool,
};

export default Character;

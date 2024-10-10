import { number, bool } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';

function Character({ page: userTotalPage, isLoading }) {
  return isLoading ? (
    ''
  ) : (
    <div className="flex flex-col justify-center items-center">
      <CharacterName page={userTotalPage} pageName="책나무" />
      <CharacterImg page={userTotalPage} />
    </div>
  );
}

Character.propTypes = {
  page: number,
  isLoading: bool,
};

export default Character;

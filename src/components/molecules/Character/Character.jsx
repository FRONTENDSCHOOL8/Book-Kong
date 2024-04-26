import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';

function Character({ page: userTotalPage }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <CharacterName page={userTotalPage} pageName="책나무" />
      <CharacterImg page={userTotalPage} />
    </div>
  );
}

Character.propTypes = {
  page: number,
};

export default Character;

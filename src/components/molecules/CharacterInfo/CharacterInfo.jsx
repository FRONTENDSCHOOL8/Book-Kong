import {} from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';

function CharacterInfo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <CharacterName />
      <CharacterImg />
    </div>
  );
}

CharacterInfo.propTypes = {};

export default CharacterInfo;

import {} from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import ShowCharacter from '../../atoms/ShowCharacter/ShowCharacter';

function CharacterInfo() {
  return (
    <div className="flex flex-col justify-center items-center">
      <CharacterName />
      <ShowCharacter />
    </div>
  );
}

CharacterInfo.propTypes = {};

export default CharacterInfo;

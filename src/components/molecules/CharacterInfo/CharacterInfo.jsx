import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';

function CharacterInfo({ height }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <CharacterName height={height} />
      <CharacterImg height={height} />
    </div>
  );
}

CharacterInfo.propTypes = {
  height: number,
};

export default CharacterInfo;

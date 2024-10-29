import { number } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterHeight({ level: charLevel }) {
  const charHeight = characterData.filter((data) => data.level === charLevel)[0]
    .height;

  return (
    <div className="flex justify-end">
      <span className="contents-sm text-grayscale-400">{charHeight}</span>
    </div>
  );
}

CharacterHeight.propTypes = {
  level: number,
};

export default CharacterHeight;

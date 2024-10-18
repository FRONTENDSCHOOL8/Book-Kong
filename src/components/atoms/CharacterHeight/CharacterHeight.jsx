import { number } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterHeight({ level: userLevel }) {
  const characterHeight = characterData.filter(
    (data) => data.level === userLevel
  )[0].height;

  return (
    <div className="flex justify-end">
      <span className="contents-sm text-grayscale-400">{characterHeight}</span>
    </div>
  );
}

CharacterHeight.propTypes = {
  level: number,
};

export default CharacterHeight;

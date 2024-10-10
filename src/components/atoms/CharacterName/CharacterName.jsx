import { number, string } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterName({ level: userLevel, pageName }) {
  const userCharacterName = characterData.filter(
    (data) => data.level === userLevel
  )[0].name;

  return (
    <span
      className={
        pageName === '책나무' ? 'heading-xs text-primary-500' : 'heading-xs'
      }
    >
      {userCharacterName}
    </span>
  );
}

CharacterName.propTypes = {
  level: number,
  pageName: string,
};

export default CharacterName;

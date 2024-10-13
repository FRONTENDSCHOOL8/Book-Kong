import { number, string } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterName({ level: userLevel, pageName }) {
  const userCharacterName = characterData.filter(
    (data) => data.level === userLevel
  )[0].name;

  switch (pageName) {
    case '책나무':
      return (
        <span className="heading-xs text-primary-500">{userCharacterName}</span>
      );
    case '마이페이지':
      return (
        <span className="heading-xs text-primary-500 bg-[#FFE0DA] px-3 py-2 rounded-3xl">
          {userCharacterName}
        </span>
      );
    default:
      return <span className="heading-xs">{userCharacterName}</span>;
  }
}

CharacterName.propTypes = {
  level: number,
  pageName: string,
};

export default CharacterName;

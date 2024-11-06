import { number, string } from 'prop-types';
import characterList from '../../../data/character.json';

function CharacterName({ level: charLevel, pageName }) {
  const charName = characterList.filter((data) => data.level === charLevel)[0]
    .name;

  switch (pageName) {
    case '책나무':
      return <span className="heading-xs text-primary-500">{charName}</span>;
    case '마이페이지':
      return (
        <span className="tab-menu text-primary-500 bg-[#FFE0DA] px-3 py-2 rounded-3xl">
          {charName}
        </span>
      );
    default:
      return <span className="heading-xs">{charName}</span>;
  }
}

CharacterName.propTypes = {
  level: number,
  pageName: string,
};

export default CharacterName;

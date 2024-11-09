import { number } from 'prop-types';
import characterList from '../../../data/character.json';

function CharacterImg({ level: charLevel }) {
  const charObj = characterList.filter((data) => data.level === charLevel)[0];
  const charImg = charObj.image;
  const charName = charObj.name;

  return (
    <img
      src={charImg}
      alt={`${charLevel}단계 캐릭터 ${charName}`}
      width={150}
    />
  );
}

CharacterImg.propTypes = {
  level: number,
};

export default CharacterImg;

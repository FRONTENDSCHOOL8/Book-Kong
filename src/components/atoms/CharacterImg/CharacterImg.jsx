import { number } from 'prop-types';
import characterList from '../../../data/character.json';

function CharacterImg({ level: charLevel }) {
  const charImg = characterList.filter((data) => data.level === charLevel)[0]
    .image;

  return <img src={charImg} alt="캐릭터 이미지" width={150} />;
}

CharacterImg.propTypes = {
  level: number,
};

export default CharacterImg;

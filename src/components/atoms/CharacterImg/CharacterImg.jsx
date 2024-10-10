import { number } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterImg({ level: userLevel }) {
  const userCharacterImg = characterData.filter(
    (data) => data.level === userLevel
  )[0].image;

  return <img src={userCharacterImg} width={150} />;
}

CharacterImg.propTypes = {
  level: number,
};

export default CharacterImg;

import { number } from 'prop-types';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import characterData from '../../../data/character.json';

function CharacterImg({ page: userTotalPage }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));
  const userCharacterImg = characterData.filter(
    (data) => data.level === userLevel
  )[0].image;

  return <img src={userCharacterImg} width={150} />;
}

CharacterImg.propTypes = {
  page: number,
};

export default CharacterImg;

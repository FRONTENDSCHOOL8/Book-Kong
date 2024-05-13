import { number } from 'prop-types';
import {
  calcUserBookHeight,
  calcUserLevel,
} from '../../../utils/calcUserLevel';
import characterData from '../../../data/character.json';

function CharacterImg({ page: userTotalPage }) {
  const userLevel = calcUserLevel(calcUserBookHeight(userTotalPage));
  const userCharacterImg = characterData.filter(
    (data) => data.level === userLevel
  )[0].image;

  return <img src={userCharacterImg} width={150} />;
}

CharacterImg.propTypes = {
  page: number,
};

export default CharacterImg;

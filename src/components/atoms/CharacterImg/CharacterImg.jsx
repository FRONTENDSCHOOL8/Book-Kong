import { number } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import CharacterData from '../../../data/character.json';

function CharacterImg({ height }) {
  const level = calcLevel(calcCentimeter(height));
  const showImg = CharacterData.filter((data) => data.level === level)[0].image;

  return <img src={showImg} width={150} />;
}

CharacterImg.propTypes = {
  height: number,
};

export default CharacterImg;

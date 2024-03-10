import {} from 'prop-types';
import calcCentimeter from '../../../utils/calcCentimeter';

function ShowCharacter() {
  let calHeight = calcCentimeter(500, 0.005, 2);

  let characterImg;

  if (calHeight < 35) {
    characterImg = '/images/characters/1단계.png';
  } else if (calHeight < 70) {
    characterImg = '/images/characters/2단계.png';
  } else if (calHeight < 105) {
    characterImg = '/images/characters/3단계.png';
  } else if (calHeight < 140) {
    characterImg = '/images/characters/4단계.png';
  } else if (calHeight < 175) {
    characterImg = '/images/characters/5단계.png';
  } else if (calHeight < 210) {
    characterImg = '/images/characters/6단계.png';
  } else if (calHeight < 245) {
    characterImg = '/images/characters/7단계.png';
  } else if (calHeight < 280) {
    characterImg = '/images/characters/8단계.png';
  } else if (calHeight < 315) {
    characterImg = '/images/characters/9단계.png';
  } else if (calHeight < 350) {
    characterImg = '/images/characters/10단계.png';
  } else if (calHeight < 385) {
    characterImg = '/images/characters/11단계.png';
  } else {
    characterImg = '/images/characters/12단계.png';
  }

  return <img src={characterImg} width={150} />;
}

ShowCharacter.propTypes = {};

export default ShowCharacter;

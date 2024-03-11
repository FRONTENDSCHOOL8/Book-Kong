import {} from 'prop-types';
import calcCentimeter from '../../../utils/calcCentimeter';

function CharacterImg() {
  let calHeight = calcCentimeter(500, 0.005, 2);

  let showImg;

  if (calHeight < 35) {
    showImg = '/images/characters/1단계.png';
  } else if (calHeight < 70) {
    showImg = '/images/characters/2단계.png';
  } else if (calHeight < 105) {
    showImg = '/images/characters/3단계.png';
  } else if (calHeight < 140) {
    showImg = '/images/characters/4단계.png';
  } else if (calHeight < 175) {
    showImg = '/images/characters/5단계.png';
  } else if (calHeight < 210) {
    showImg = '/images/characters/6단계.png';
  } else if (calHeight < 245) {
    showImg = '/images/characters/7단계.png';
  } else if (calHeight < 280) {
    showImg = '/images/characters/8단계.png';
  } else if (calHeight < 315) {
    showImg = '/images/characters/9단계.png';
  } else if (calHeight < 350) {
    showImg = '/images/characters/10단계.png';
  } else if (calHeight < 385) {
    showImg = '/images/characters/11단계.png';
  } else {
    showImg = '/images/characters/12단계.png';
  }

  return <img src={showImg} width={150} />;
}

CharacterImg.propTypes = {};

export default CharacterImg;

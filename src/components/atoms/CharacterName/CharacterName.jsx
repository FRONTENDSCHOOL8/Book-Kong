import {} from 'prop-types';
import calcCentimeter from '../../../utils/calcCentimeter';

function CharacterName() {
  let calHeight = calcCentimeter(500, 0.005, 2);

  let BookkongName;

  if (calHeight < 35) {
    BookkongName = '뿡뿡이';
  } else if (calHeight < 70) {
    BookkongName = '빵빵이';
  } else if (calHeight < 105) {
    BookkongName = '뺭뺭이';
  } else if (calHeight < 140) {
    BookkongName = '뻥뻥이';
  } else if (calHeight < 175) {
    BookkongName = '쁭쁭이';
  } else if (calHeight < 210) {
    BookkongName = '뼝뼝이';
  } else if (calHeight < 245) {
    BookkongName = '뽕뽕이';
  } else if (calHeight < 280) {
    BookkongName = '뿅뿅이';
  } else if (calHeight < 315) {
    BookkongName = '쁑쁑이';
  } else if (calHeight < 350) {
    BookkongName = '삥삥이';
  } else if (calHeight < 385) {
    BookkongName = '뼁뼁이';
  } else {
    BookkongName = '뺑뺑이';
  }

  return <span className="heading-xs text-primary-500">{BookkongName}</span>;
}

CharacterName.propTypes = {};

export default CharacterName;

import { number, string } from 'prop-types';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import characterData from '../../../data/character.json';

function CharacterName({ page: userTotalPage, pageName: webPageName }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));
  const userCharacterName = characterData.filter(
    (data) => data.level === userLevel
  )[0].name;

  return (
    <span
      className={
        webPageName === '책나무' ? 'heading-xs text-primary-500' : 'heading-xs'
      }
    >
      {userCharacterName}
    </span>
  );
}

CharacterName.propTypes = {
  page: number,
  pageName: string,
};

export default CharacterName;

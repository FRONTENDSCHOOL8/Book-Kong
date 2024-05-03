import { number } from 'prop-types';
import characterData from '../../../data/character.json';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';

function CharacterBadge({ height }) {
  const userLevel = calcLevel(calcCentimeter(height));
  const BkLevel = characterData.filter(
    (data) => data.userLevel === userLevel
  )[0].userLevel;

  const userCharacter = BkLevel.find((data) => data.userLevel === userLevel);

  if (!userCharacter) {
    return null; // 유효한 캐릭터 레벨이 아닌 경우 뱃지를 표시하지 않음
  }

  return (
    <div className="badge">
      <img
        src="/images/characters/myCharacter.svg"
        alt={`Badge for level ${userLevel}`}
      />
    </div>
  );
}

CharacterBadge.propTypes = {
  height: number,
};

export default CharacterBadge;

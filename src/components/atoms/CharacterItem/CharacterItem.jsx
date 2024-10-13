import { number, object, func } from 'prop-types';

function CharacterItem({
  data: { image: characterImg, level: characterLevel },
  level: userLevel,
  index,
  onClick,
}) {
  if (userLevel >= index + 1) {
    return (
      <li data-index={`${index}`}>
        <button
          className="w-20 flex-col justify-center border-[3px] rounded-lg border-primary-500 bg-white"
          onClick={onClick}
        >
          <img src={characterImg} alt={`${characterLevel}단계 캐릭터`} />
          <span className="character-list text-grayscale-700 pt-1 pb-[10px] justify-center flex">
            {characterLevel}단계
          </span>
        </button>
      </li>
    );
  } else {
    return (
      <li className="w-20 flex-col justify-center rounded-lg bg-white cursor-pointer">
        <img src="/images/characters/locked.png" alt="잠겨있는 캐릭터" />
        <span className="character-list text-grayscale-700 flex justify-center">
          {characterLevel}단계
        </span>
      </li>
    );
  }
}

CharacterItem.propTypes = {
  data: object,
  index: number,
  level: number,
  onClick: func,
};

export default CharacterItem;

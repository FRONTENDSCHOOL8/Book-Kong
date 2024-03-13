import { number, object } from 'prop-types';

function CharacterCard({ data, index, level }) {
  return level >= index + 1 ? (
    <li className="w-[84px] flex-col justify-center border-[3px] rounded-lg border-primary-500 bg-white">
      <img src={data.image} />
      <span className="character-list text-grayscale-700 pt-[3px] pb-[10px] justify-center flex">
        {data.level}단계
      </span>
    </li>
  ) : (
    <li className="w-[84px] flex-col justify-center rounded-lg bg-white">
      <img src="/images/characters/잠금캐릭.png" />
      <span className="character-list text-grayscale-700 flex justify-center">
        {data.level}단계
      </span>
    </li>
  );
}

CharacterCard.propTypes = {
  data: object,
  index: number,
  level: number,
};

export default CharacterCard;

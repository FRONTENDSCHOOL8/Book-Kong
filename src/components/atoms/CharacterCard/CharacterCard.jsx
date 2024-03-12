import { number, object } from 'prop-types';

function CharacterCard({ data, index, level }) {
  return level >= index + 1 ? (
    <li className="flex-col justify-center border-[3px] rounded-lg border-primary-500">
      <img src={data.image} />
      <span className="character-list text-grayscale-700 pt-[3px] pb-[10px] justify-center flex">
        {data.level}단계
      </span>
    </li>
  ) : (
    <li>
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

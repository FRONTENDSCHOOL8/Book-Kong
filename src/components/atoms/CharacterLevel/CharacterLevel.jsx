import { number } from 'prop-types';

function CharacterLevel({ level: userLevel }) {
  return (
    <div className="flex justify-end">
      <span className="contents-md text-primary-500 h-[26px]">
        {userLevel}단계
      </span>
    </div>
  );
}

CharacterLevel.propTypes = {
  level: number,
};

export default CharacterLevel;

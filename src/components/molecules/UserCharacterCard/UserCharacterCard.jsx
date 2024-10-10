import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import CharacterLevel from '../../atoms/CharacterLevel/CharacterLevel';
import CharacterHeight from '../../atoms/CharacterHeight/CharacterHeight';
import CharacterDesc from '../../atoms/CharacterDesc/CharacterDesc';

function UserCharacterCard({ level: userLevel }) {
  return (
    <div className="bg-white rounded-[10px] p-6">
      <CharacterName level={userLevel} />
      <CharacterDesc level={userLevel} />
      <div className="flex justify-center">
        <CharacterImg level={userLevel} />
      </div>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel level={userLevel} />
        <CharacterHeight level={userLevel} />
      </div>
    </div>
  );
}

UserCharacterCard.propTypes = {
  level: number,
};

export default UserCharacterCard;

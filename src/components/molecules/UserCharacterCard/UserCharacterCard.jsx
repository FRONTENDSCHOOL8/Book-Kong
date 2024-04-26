import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import CharacterLevel from '../../atoms/CharacterLevel/CharacterLevel';
import CharacterHeight from '../../atoms/CharacterHeight/CharacterHeight';
import CharacterDesc from '../../atoms/CharacterDesc/CharacterDesc';

function UserCharacterCard({ page: userTotalPage }) {
  return (
    <div className="bg-white rounded-[10px] p-6">
      <CharacterName className="text-grayscale-900" page={userTotalPage} />
      <CharacterDesc page={userTotalPage} />
      <div className="flex justify-center">
        <CharacterImg page={userTotalPage} />
      </div>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel page={userTotalPage} />
        <CharacterHeight page={userTotalPage} />
      </div>
    </div>
  );
}

UserCharacterCard.propTypes = {
  page: number,
};

export default UserCharacterCard;

import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import CharacterLevel from '../../atoms/CharacterLevel/CharacterLevel';
import CharacterCentimeter from './../../atoms/CharacterCentimeter/CharacterCentimeter';
import CharacterDesc from './../../atoms/CharacterDesc/CharacterDesc';

function UserCharacterCard({ height }) {
  return (
    <div className="bg-white p-4 rounded-[10px]">
      <CharacterName className="text-grayscale-900" height={height} />
      <CharacterDesc height={height} />
      <div className="flex justify-center">
        <CharacterImg height={height} />
      </div>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel height={height} />
        <CharacterCentimeter height={height} />
      </div>
    </div>
  );
}

UserCharacterCard.propTypes = {
  height: number,
};

export default UserCharacterCard;

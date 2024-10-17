import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import CharacterLevel from '../../atoms/CharacterLevel/CharacterLevel';
import CharacterHeight from '../../atoms/CharacterHeight/CharacterHeight';
import CharacterDesc from '../../atoms/CharacterDesc/CharacterDesc';
import MyCharBadge from '../../atoms/MyCharBadge/MyCharBadge';

function UserCharacterCard({ userLv, clickedLv }) {
  return userLv === clickedLv ? (
    <div className="bg-white rounded-[10px] p-6">
      <CharacterName level={clickedLv} />
      <CharacterDesc level={clickedLv} />
      <figure className="flex flex-col items-center gap-8">
        <CharacterImg level={clickedLv} />
        <MyCharBadge />
      </figure>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel level={clickedLv} />
        <CharacterHeight level={clickedLv} />
      </div>
    </div>
  ) : (
    <div className="bg-white rounded-[10px] p-6">
      <CharacterName level={clickedLv} />
      <CharacterDesc level={clickedLv} />
      <div className="flex justify-center">
        <CharacterImg level={clickedLv} />
      </div>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel level={clickedLv} />
        <CharacterHeight level={clickedLv} />
      </div>
    </div>
  );
}

UserCharacterCard.propTypes = {
  userLv: number,
  clickedLv: number,
};

export default UserCharacterCard;

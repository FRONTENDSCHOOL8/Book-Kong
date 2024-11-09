import { number } from 'prop-types';
import CharacterName from '../../atoms/CharacterName/CharacterName';
import CharacterImg from '../../atoms/CharacterImg/CharacterImg';
import CharacterLevel from '../../atoms/CharacterLevel/CharacterLevel';
import CharacterHeight from '../../atoms/CharacterHeight/CharacterHeight';
import CharacterDesc from '../../atoms/CharacterDesc/CharacterDesc';
import MyCharBadge from '../../atoms/MyCharBadge/MyCharBadge';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';
function UserCharacterCard({ userLv, clickedLv }) {
  return userLv === clickedLv ? (
    <section className="bg-white rounded-[10px] p-6 mb-4 mx-4">
      <A11yHidden as="h2">선택된 캐릭터 상세 정보</A11yHidden>
      <CharacterName level={clickedLv} />
      <CharacterDesc level={clickedLv} />
      <figure className="flex flex-col items-center gap-8">
        <CharacterImg level={clickedLv} />
        <MyCharBadge />
      </figure>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel level={clickedLv} pgName="캐릭터" />
        <CharacterHeight level={clickedLv} />
      </div>
    </section>
  ) : (
    <section className="bg-white rounded-[10px] p-6 mb-4 mx-4">
      <A11yHidden as="h2">선택된 캐릭터 상세 정보</A11yHidden>
      <CharacterName level={clickedLv} />
      <CharacterDesc level={clickedLv} />
      <div className="flex justify-center">
        <CharacterImg level={clickedLv} />
      </div>
      <div className="flex-col px-6 pt-[49px] justify-end">
        <CharacterLevel level={clickedLv} pgName="캐릭터" />
        <CharacterHeight level={clickedLv} />
      </div>
    </section>
  );
}

UserCharacterCard.propTypes = {
  userLv: number,
  clickedLv: number,
};

export default UserCharacterCard;

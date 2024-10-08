import { number } from 'prop-types';
import { calcBookHeight, calcLevel } from '../../../utils/calcLevel';
import characterData from '../../../data/character.json';

function CharacterDesc({ page: userTotalPage }) {
  const userLevel = calcLevel(calcBookHeight(userTotalPage));
  const characterDesc = characterData
    .filter((data) => data.level === userLevel)[0]
    .description.replace(/\n/g, '<br />');

  return (
    <div className="flex pt-4 pb-[7px]">
      <span
        className="text-content-medium font-normal tracking-[-0.32px] text-grayscale-500"
        dangerouslySetInnerHTML={{
          __html: characterDesc,
        }}
      />
    </div>
  );
}

CharacterDesc.propTypes = {
  page: number,
};

export default CharacterDesc;

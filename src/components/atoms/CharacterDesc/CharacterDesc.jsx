import { number } from 'prop-types';
import { calcCentimeter, calcLevel } from '../../../utils/calcCentimeter';
import characterData from '../../../data/character.json';

function CharacterDesc({ height }) {
  const level = calcLevel(calcCentimeter(height));
  const bookkongDesc = characterData
    .filter((data) => data.level === level)[0]
    .description.replace(/\n/g, '<br />');

  return (
    <div className="flex pt-4 pb-[7px]">
      <span
        className="text-content-medium font-normal tracking-[-0.32px] text-grayscale-500"
        dangerouslySetInnerHTML={{
          __html: bookkongDesc,
        }}
      />
    </div>
  );
}

CharacterDesc.propTypes = {
  height: number,
};

export default CharacterDesc;

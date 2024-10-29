import { number } from 'prop-types';
import characterData from '../../../data/character.json';

function CharacterDesc({ level: charLevel }) {
  const characterDesc = characterData
    .filter((data) => data.level === charLevel)[0]
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
  level: number,
};

export default CharacterDesc;

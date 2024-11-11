import { number, func } from 'prop-types';
import CharacterItem from '../../atoms/CharacterItem/CharacterItem';
import characterList from '../../../data/character.json';
import { v4 as uuidv4 } from 'uuid';
import A11yHidden from '../../atoms/A11yHidden/A11yHidden';

function CharacterList({ userLv, clickedLv, onClick }) {
  return (
    <section className="overflow-scroll">
      <A11yHidden as="h2">캐릭터 목록</A11yHidden>
      <ul className="flex gap-4 w-[1184px] px-4">
        {characterList.map((data, index) => (
          <CharacterItem
            key={uuidv4()}
            data={data}
            userLv={userLv}
            clickedLv={clickedLv}
            index={index}
            onClick={onClick}
          />
        ))}
      </ul>
    </section>
  );
}

CharacterList.propTypes = {
  userLv: number,
  clickedLv: number,
  onClick: func,
};

export default CharacterList;

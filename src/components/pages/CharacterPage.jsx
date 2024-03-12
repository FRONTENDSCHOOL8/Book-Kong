import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';
import CharacterCollection from '../organisms/CharacterCollection/CharacterCollection';

export default function CharacterPage() {
  return (
    <>
      <LargeHeader title={'캐릭터'} />
      <CharacterCollection />
    </>
  );
}

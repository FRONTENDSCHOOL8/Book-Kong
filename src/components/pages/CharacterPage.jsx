import Header from '../organisms/Header/Header/Header';
import CharacterCollection from '../organisms/CharacterCollection/CharacterCollection';
import { Helmet } from 'react-helmet-async';

export default function CharacterPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 캐릭터 페이지</title>
      </Helmet>
      <Header title={'캐릭터'} />
      <CharacterCollection />
    </>
  );
}

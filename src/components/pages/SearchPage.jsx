import SearchMainContents from '../organisms/SearchMainContents/SearchMainContents';
import SmallHeader from './../organisms/Header/SmallHeader/SmallHeader';

function SearchPage() {
  return (
    <>
      <SmallHeader title={'검색하기'} />
      <SearchMainContents />
    </>
  );
}

export default SearchPage;

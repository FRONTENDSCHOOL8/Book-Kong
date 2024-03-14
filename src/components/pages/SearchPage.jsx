import { Helmet } from 'react-helmet-async';
import Header from '../organisms/Header/Header/Header';
import SearchMainContents from '../organisms/SearchMainContents/SearchMainContents';

function SearchPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 검색 페이지</title>
      </Helmet>
      <Header title={'검색하기'} />
      <SearchMainContents />
    </>
  );
}

export default SearchPage;

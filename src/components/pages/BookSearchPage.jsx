import { Helmet } from 'react-helmet-async';
import Header from '../organisms/Header/Header/Header';
import BookSearchMain from '../organisms/BookSearchMain/BookSearchMain';

function BookSearchPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 책 검색</title>
      </Helmet>
      <Header title={'검색하기'} />
      <BookSearchMain />
    </>
  );
}

export default BookSearchPage;

import DetailBook from '../../organisms/DetailBook/DetailBook';
import Header from '../../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';

function BookDetailPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 책 상세</title>
      </Helmet>
      <Header title="책 상세" />
      <DetailBook />
    </>
  );
}

export default BookDetailPage;

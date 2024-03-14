import {} from 'prop-types';

import DetailBook from '../organisms/DetailBook/DetailBook';
import Header from '../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';

function DetailPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 상세 페이지</title>
      </Helmet>
      <Header title="상세페이지" />
      <DetailBook />
    </>
  );
}

DetailPage.propTypes = {};

export default DetailPage;

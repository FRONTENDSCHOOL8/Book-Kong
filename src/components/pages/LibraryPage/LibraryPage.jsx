import { Outlet } from 'react-router-dom';
import Header from '../../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';

function LibraryPage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 서재</title>
      </Helmet>
      <Header title="서재" />
      <Outlet />
    </>
  );
}

export default LibraryPage;

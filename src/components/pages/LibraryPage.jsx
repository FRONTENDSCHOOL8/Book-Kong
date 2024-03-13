import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';

export default function LibraryPage() {
  return (
    <>
      <Helmet>
        <title>서재 페이지</title>
      </Helmet>
      <Header title="서재" />
      <Outlet />
    </>
  );
}

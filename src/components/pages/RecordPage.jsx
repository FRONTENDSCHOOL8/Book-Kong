import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header/Header/Header';
import { Helmet } from 'react-helmet-async';

export default function RecordPage() {
  return (
    <div className=" max-w-md m-auto min-w-80 bg-background-gray pt-[98px]">
      <Helmet>
        <title>책콩 | 기록 페이지</title>
      </Helmet>
      <Header title={'기록'} />
      <Outlet />
    </div>
  );
}

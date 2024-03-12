import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header/Header/Header';

export default function LibraryPage() {
  return (
    <>
      <Header title="서재"/>
      <Outlet />
    </>
  );
}

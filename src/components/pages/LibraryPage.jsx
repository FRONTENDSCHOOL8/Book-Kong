import { Outlet } from 'react-router-dom';
import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';
import TabNavigation from '../organisms/TabNavigation/TabNavigation';

export default function LibraryPage() {
  return (
    <>
      <LargeHeader title={'서재'} />
      <TabNavigation page="서재" />
      <Outlet />
    </>
  );
}

import { Outlet } from 'react-router-dom';
import TabNavigation from '../organisms/TabNavigation/TabNavigation';
import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';

export default function RecordPage() {
  return (
    <>
      <LargeHeader title={'기록'} />
      <TabNavigation page="기록" />
      <Outlet />
    </>
  );
}

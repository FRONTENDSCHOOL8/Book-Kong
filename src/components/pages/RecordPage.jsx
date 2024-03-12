import { Outlet } from 'react-router-dom';
import Header from '../organisms/Header/Header/Header';

export default function RecordPage() {
  return (
    <div className="h-screen max-w-md m-auto min-w-80 bg-background-gray pt-[98px]">
      <Header title={"기록"}/>
      <Outlet />
    </div>
  );
}

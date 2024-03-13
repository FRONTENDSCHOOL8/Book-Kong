import { Helmet } from 'react-helmet-async';
import Header from '../organisms/Header/Header/Header';

export default function MypagePage() {
  return (
    <>
      <Helmet>
        <title>책콩 | 마이페이지</title>
      </Helmet>
      <Header title={'마이페이지'} />
    </>
  );
}

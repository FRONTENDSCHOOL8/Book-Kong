import { Helmet } from 'react-helmet-async';
import Header from '../organisms/Header/Header/Header';
import BookRegistForm from '../organisms/BookRegistForm/BookRegistForm';

function BookRegistrationPage() {
  return (
    <>
      <Helmet>
        <title>직접 입력하기 페이지</title>
      </Helmet>
      <Header title={'직접 입력하기'} />
      <main className="bg-grayscale-white mt-2 border-t-[1px] pt-[81px] pb-[120px] border-grayscale-100 px-4">
        <BookRegistForm />
      </main>
    </>
  );
}

export default BookRegistrationPage;

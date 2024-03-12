import BookInfoList from '../organisms/BookInfoList/BookInfoList';
import Header from '../organisms/Header/Header/Header';

function BookRegistrationPage() {
  return (
    <>
      <Header title={'직접 입력하기'} />
      <main className="bg-grayscale-white mt-2 border-t-[1px] pt-[81px] pb-[120px] border-grayscale-100 px-4">
        <form>
          <hr className="mt-6 mb-6" />
          <BookInfoList />
        </form>
      </main>
    </>
  );
}

export default BookRegistrationPage;

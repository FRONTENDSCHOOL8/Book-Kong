import BookInfoList from '../organisms/BookInfoList/BookInfoList';
import SmallHeader from '../organisms/Header/SmallHeader/SmallHeader';

function BookRegistrationPage() {
  return (
    <>
      <SmallHeader title={'직접 입력하기'} />
      <main className="bg-grayscale-white mt-2 border-t-[1px] border-grayscale-100 px-4">
        <form>
          <BookInfoList />
        </form>
      </main>
    </>
  );
}

BookRegistrationPage.propTypes = {};

export default BookRegistrationPage;

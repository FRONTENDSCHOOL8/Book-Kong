import BookInfoList from '../BookInfoList/BookInfoList';
import BookInfoState from '../../molecules/BookInfoState/BookInfoState';

function BookRegistForm() {
  return (
    <form>
      <BookInfoState />
      <hr className="mt-6 mb-6" />
      <BookInfoList />
    </form>
  );
}

export default BookRegistForm;

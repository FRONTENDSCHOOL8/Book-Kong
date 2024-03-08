// import BookBlockList from '../molecules/BookBlockList/BookBlockList';
import BookTree from '../organisms/BookTree/BookTree';
import LargeHeader from '/src/components/organisms/Header/LargeHeader/LargeHeader';

export default function LibraryPage() {
  return (
    <>
      <LargeHeader title={'서재'} />
      <BookTree />
    </>
  );
}

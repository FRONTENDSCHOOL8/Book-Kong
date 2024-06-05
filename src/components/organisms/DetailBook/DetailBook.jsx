import DetailTitle from '../../molecules/DetailTitle/DetailTitle';
import DetailBookState from '../../molecules/DetailBookState/DetailBookState';
import DetailBookInfo from '../../molecules/DetailBookInfo/DetailBookInfo';
import DetailBookCover from '../../molecules/DetailBookCover/DetailBookCover';
import DetailBookMemo from '../../molecules/DetailBookMemo/DetailBookMemo';
import DetailBookFeed from '../../molecules/DetailBookFeed/DetailBookFeed';
import BookDetailNavigation from '../../molecules/BookDetailNavigation/BookDetailNavigation';
import { useLoaderData } from 'react-router-dom';

function DetailBook() {
  const bookData = useLoaderData();

  return (
    <main className="pb-[56px] pt-[57px]">
      <DetailBookCover
        data={{
          collectionId: bookData.collectionId,
          id: bookData.id,
          cover: bookData.cover,
          status: bookData.status,
        }}
      />
      <div className="flex flex-col border-t border-b bg-background-gray border-grayscale-100 ">
        <div className="flex flex-col gap-6 py-6 bg-grayscale-white">
          <DetailTitle data={bookData} />
          <DetailBookState state={bookData} />
        </div>
        <BookDetailNavigation />
        <div className="flex flex-col gap-3">
          <DetailBookInfo data={bookData} />
          <DetailBookMemo data={bookData} />
          <DetailBookFeed data={bookData} />
        </div>
      </div>
    </main>
  );
}

DetailBook.propTypes = {};

export default DetailBook;

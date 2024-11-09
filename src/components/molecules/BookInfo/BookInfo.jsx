import { bool, number, oneOf } from 'prop-types';
import TotalBookCount from './../../atoms/TotalBookCount/TotalBookCount';
import TotalBookHeight from './../../atoms/TotalBookHeight/TotalBookHeight';

function BookInfo({ bookNum: doneBookNum, bookHeight, isLoading, pgName }) {
  const boxStyle =
    {
      'book-tree':
        'flex gap-4 w-full h-[84px] py-6 justify-center items-center bg-background-gray border rounded-lg border-grayscale-100 text-primary-500 pl-[0.5rem]',
      mypage:
        'flex gap-4 w-[20.5rem] py-1 justify-center items-center bg-background-gray border rounded-lg border-grayscale-100 text-primary-500 my-6 pl-[0.5rem]',
    }[pgName] ?? '';

  return (
    <div className={boxStyle}>
      {isLoading ? (
        '로딩 중'
      ) : (
        <>
          <TotalBookCount bookNum={doneBookNum}></TotalBookCount>
          <TotalBookHeight height={bookHeight}></TotalBookHeight>
        </>
      )}
    </div>
  );
}

BookInfo.propTypes = {
  bookNum: number,
  bookHeight: number,
  isLoading: bool,
  pgName: oneOf(['book-tree', 'mypage']),
};

export default BookInfo;

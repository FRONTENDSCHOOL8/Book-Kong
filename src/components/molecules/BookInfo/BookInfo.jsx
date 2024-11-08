import { bool, number } from 'prop-types';
import TotalBookCount from './../../atoms/TotalBookCount/TotalBookCount';
import TotalBookHeight from './../../atoms/TotalBookHeight/TotalBookHeight';

function BookInfo({ bookNum: doneBookNum, bookHeight, isLoading }) {
  return (
    <div className="h-[84px] py-6 items-center border flex justify-center w-full gap-4 rounded-lg bg-primary-50 border-primary-100 text-primary-500 pl-[0.5rem]">
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
};

export default BookInfo;

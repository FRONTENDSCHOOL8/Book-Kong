import { bool, number } from 'prop-types';
import TotalBookCount from './../../atoms/TotalBookCount/TotalBookCount';
import TotalBookHeight from './../../atoms/TotalBookHeight/TotalBookHeight';

function BookInfo({
  count: totalBookCount,
  height: totalBookHeight,
  isLoading,
}) {
  return (
    <div className="w-[287px] h-[84px] py-6 flex justify-center items-center border rounded-lg bg-background-gray border-grayscale-100">
      <div className="flex justify-center w-[100%] gap-4">
        {isLoading && '로딩중'}
        {!isLoading && (
          <>
            <TotalBookCount bookCount={totalBookCount}></TotalBookCount>
            <TotalBookHeight page={totalBookHeight}></TotalBookHeight>
          </>
        )}
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  count: number,
  height: number,
  isLoading: bool,
};

export default BookInfo;

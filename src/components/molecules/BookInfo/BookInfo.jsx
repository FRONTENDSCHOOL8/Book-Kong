import { bool, number } from 'prop-types';
import { calcBookHeight } from '../../../utils/calcLevel';
import TotalBookCount from './../../atoms/TotalBookCount/TotalBookCount';
import TotalBookHeight from './../../atoms/TotalBookHeight/TotalBookHeight';

function BookInfo({
  bookNum: userFinishBookNum,
  page: userTotalPage,
  isLoading,
}) {
  const userBookHeight = calcBookHeight(userTotalPage);

  return (
    <div className="w-[287px] h-[84px] py-6 flex justify-center items-center border rounded-lg bg-background-gray border-grayscale-100">
      <div className="flex justify-center w-full gap-4">
        {isLoading ? (
          '로딩 중'
        ) : (
          <>
            <TotalBookCount bookNum={userFinishBookNum}></TotalBookCount>
            <TotalBookHeight height={userBookHeight}></TotalBookHeight>
          </>
        )}
      </div>
    </div>
  );
}

BookInfo.propTypes = {
  bookNum: number,
  page: number,
  isLoading: bool,
};

export default BookInfo;

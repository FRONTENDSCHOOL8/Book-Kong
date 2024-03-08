import { arrayOf, bool, object } from 'prop-types';
import TotalBookCount from './../../atoms/TotalBookCount/TotalBookCount';
import TotalBookHeight from './../../atoms/TotalBookHeight/TotalBookHeight';

function BookInfo({ data, isLoading }) {
  // 유저의 다 읽은 책 권수 계산
  const totalBookCount = data?.length;

  // 유저의 다 읽은 책 페이지 합계
  let totalBookHeight = 0;

  if (data) {
    for (const pages of data) {
      totalBookHeight += pages.total_page;
    }
  }

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
  data: arrayOf(object),
  isLoading: bool,
};

export default BookInfo;

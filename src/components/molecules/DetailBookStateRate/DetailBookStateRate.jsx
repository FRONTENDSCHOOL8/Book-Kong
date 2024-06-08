import { number, shape } from 'prop-types';

import DetailBookStateRateContent from '../DetailBookStateRateContent/DetailBookStateRateContent';
import DetailBookStateTitle from '../../atoms/DetailBookStateTitle/DetailBookStateTitle';

function DetailBookStateRate({ state: bookData }) {
  return (
    <>
      {bookData.status === '완독' && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%]">
          <DetailBookStateRateContent state={bookData} />
          <DetailBookStateTitle title="별점" />
        </div>
      )}
      {(bookData.status === '독서중' || bookData.status === '희망 도서') && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%]">
          <DetailBookStateRateContent state={bookData} />
          <DetailBookStateTitle title="기대지수" />
        </div>
      )}
    </>
  );
}

DetailBookStateRate.propTypes = {
  state: shape({
    score: number.isRequired,
  }),
};

export default DetailBookStateRate;

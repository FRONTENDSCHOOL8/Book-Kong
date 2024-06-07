import { string, shape } from 'prop-types';
import DetailBookStateTitle from '../../atoms/DetailBookStateTitle/DetailBookStateTitle';
import DetailBookStatePeriodContent from '../../atoms/DetailBookStatePeriodContent/DetailBookStatePeriodContent';

function DetailBookStatePeriod({ state: bookState }) {
  return (
    <>
      {bookState.status === '완독' && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
          <DetailBookStatePeriodContent state={bookState} />
          <DetailBookStateTitle title="완독일" />
        </div>
      )}
      {bookState.status === '독서중' && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
          <DetailBookStatePeriodContent state={bookState} />
          <DetailBookStateTitle title="시작일" />
        </div>
      )}
      {bookState.status === '희망 도서' && (
        <div className="hidden">
          <DetailBookStatePeriodContent state={bookState} />
          <DetailBookStateTitle />
        </div>
      )}
    </>
  );
}

DetailBookStatePeriod.propTypes = {
  state: shape({
    start_date: string,
  }),
};

export default DetailBookStatePeriod;

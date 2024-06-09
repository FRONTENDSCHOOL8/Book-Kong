import { string, shape } from 'prop-types';
import convertDayFormat from '../../../utils/convertDayFormat';

function DetailBookStatePeriodContent({ state: bookState }) {
  return (
    <>
      {bookState.status === '완독' && (
        <span className="text-primary-500 contents-sm-bold">
          {convertDayFormat(bookState.end_date)}
        </span>
      )}
      {bookState.status === '독서중' && (
        <span className="text-primary-500 contents-sm-bold">
          {convertDayFormat(bookState.start_date)}
        </span>
      )}
    </>
  );
}

DetailBookStatePeriodContent.propTypes = {
  state: shape({
    start_date: string.isRequired,
  }),
};

export default DetailBookStatePeriodContent;

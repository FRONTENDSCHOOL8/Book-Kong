import { string, shape } from 'prop-types';

function DetailBookStateProgressContent({ state: bookState }) {
  const calculateDaysBetweenDates = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const differenceInTime = endDate.getTime() - startDate.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };

  return (
    <>
      {bookState.status === '완독' && (
        <span className="text-primary-500 contents-md-bold">
          {calculateDaysBetweenDates(bookState.start_date, bookState.end_date)}{' '}
          일
        </span>
      )}
      {bookState.status === '독서중' && (
        <span className="text-primary-500 contents-md-bold">
          {bookState.read_page} 쪽
        </span>
      )}
    </>
  );
}

DetailBookStateProgressContent.propTypes = {
  state: shape({
    start_date: string,
    end_date: string,
    read_page: string,
  }).isRequired,
};

export default DetailBookStateProgressContent;

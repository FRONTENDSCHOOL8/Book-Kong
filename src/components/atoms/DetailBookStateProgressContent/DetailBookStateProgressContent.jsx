import { string, shape } from 'prop-types';

function DetailBookStateProgressContent({ state: bookState }) {
  const calculateDaysBetweenDates = (startDateString, endDateString) => {
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    const differenceInTime = endDate.getTime() - startDate.getTime();

    const differenceInDays = differenceInTime / (1000 * 3600 * 24);

    return differenceInDays;
  };
  const daysBetweenDates = calculateDaysBetweenDates(
    bookState.start_date,
    bookState.end_date
  );

  return (
    <span className="text-primary-500 contents-md-bold">
      {daysBetweenDates} 일
    </span>
  );
}

DetailBookStateProgressContent.propTypes = {
  state: shape({
    start_date: string.isRequired,
    end_date: string.isRequired,
  }),
};

export default DetailBookStateProgressContent;

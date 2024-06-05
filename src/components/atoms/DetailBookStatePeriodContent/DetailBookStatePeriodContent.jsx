import { string, shape } from 'prop-types';

function DetailBookStatePeriodContent({ state: bookState }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    return `${year}년 ${month}월 ${day}일`;
  };
  return (
    <span className="text-primary-500 contents-sm-bold">
      {formatDate(bookState.start_date)}
    </span>
  );
}

DetailBookStatePeriodContent.propTypes = {
  state: shape({
    start_date: string.isRequired,
  }),
};

export default DetailBookStatePeriodContent;

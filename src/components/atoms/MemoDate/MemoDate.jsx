import PropTypes from 'prop-types';
import convertDayFormat from '/src/utils/convertDayFormat';

function MemoDate({ date }) {
  return (
    <span className="text-right text-gray-500 contents-xs">
      {convertDayFormat(date)}
    </span>
  );
}

MemoDate.propTypes = { date: PropTypes.string.isRequired };

export default MemoDate;

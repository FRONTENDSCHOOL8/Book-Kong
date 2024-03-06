import PropTypes from 'prop-types';
import convertDayFormat from '/src/utils/convertDayFormat'

function MemoDate({ date }) {
  return (
    <span className="contents-xs text-gray-300 text-right">
      {convertDayFormat(date)}
    </span>
  );
}

MemoDate.propTypes = { date: PropTypes.string.isRequired };

export default MemoDate;

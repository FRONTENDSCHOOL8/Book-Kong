import PropTypes from 'prop-types';
import { calcDate } from '../../../utils/calcDate';

function MemoDate({ date }) {
  return (
    <span className="contents-xs text-gray-300 text-right">
      {calcDate(date)}
    </span>
  );
}

MemoDate.propTypes = { date: PropTypes.string.isRequired };

export default MemoDate;

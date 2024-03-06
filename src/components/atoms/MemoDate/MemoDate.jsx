import PropTypes from 'prop-types';

function MemoDate({ date }) {
  return <span className="contents-xs text-gray-300 text-right">{date}</span>;
}

MemoDate.propTypes = { date: PropTypes.string.isRequired };

export default MemoDate;

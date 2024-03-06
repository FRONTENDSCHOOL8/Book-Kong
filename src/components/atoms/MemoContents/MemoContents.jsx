import PropTypes from 'prop-types';

function MemoContents({ title }) {
  return <p className="contents-sm max-h-[300px] clip-text-10">{title}</p>;
}

MemoContents.propTypes = { title: PropTypes.string.isRequired };

export default MemoContents;

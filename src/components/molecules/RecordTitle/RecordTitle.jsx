import PropTypes from 'prop-types';

function RecordTitle({ title }) {
  return (
    <p className="pl-6 contents-xs text-primary-500 clip-text-1 memo-icon before:-ml-6">
      {title}
    </p>
  );
}

RecordTitle.propTypes = { title: PropTypes.string.isRequired };

export default RecordTitle;

import PropTypes from 'prop-types';

function LargeHeaderTitle({ title }) {
  return <h1 className="heading-sm text-primary-500">{title}</h1>;
}

LargeHeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LargeHeaderTitle;

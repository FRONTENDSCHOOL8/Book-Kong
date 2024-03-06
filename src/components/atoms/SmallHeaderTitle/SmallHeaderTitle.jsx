import PropTypes from 'prop-types';

function SmallHeaderTitle({ title }) {
  return (
    <h1 className="absolute left-[50%] translate-x-[-50%] text-grayscale-900 heading-2xs text-center">
      {title}
    </h1>
  );
}

SmallHeaderTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SmallHeaderTitle;

import PropTypes from 'prop-types';
import LargeHeaderTitle from '/src/components/atoms/LargeHeaderTitle/LargeHeaderTitle';
import LargeHeaderIcon from '/src/components/atoms/LargeHeaderIcon/LargeHeaderIcon';

function LargeHeader({ title }) {
  return (
    <div className="sticky flex items-center justify-between px-4 py-3 bg-grayscale-white">
      <LargeHeaderTitle title={title} />
      <LargeHeaderIcon title={title} />
    </div>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LargeHeader;

import PropTypes from 'prop-types';
import LargeHeaderTitle from '/src/components/atoms/LargeHeaderTitle/LargeHeaderTitle';
import LargeHeaderIcon from '/src/components/atoms/LargeHeaderIcon/LargeHeaderIcon';

function LargeHeader({ title }) {
  return (
    <header className="flex justify-between items-center px-4 py-3 sticky bg-grayscale-white">
      <LargeHeaderTitle title={title} />
      <LargeHeaderIcon title={title} />
    </header>
  );
}

LargeHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default LargeHeader;

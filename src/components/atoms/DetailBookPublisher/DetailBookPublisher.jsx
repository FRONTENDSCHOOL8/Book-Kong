import { string, shape } from 'prop-types';

function DetailBookPublisher({ data: bookData }) {
  return (
    <span className="contents-xs-bold text-grayscale-700">
      {bookData.publisher}
    </span>
  );
}

DetailBookPublisher.propTypes = {
  data: shape({
    publisher: string.isRequired,
  }),
};

export default DetailBookPublisher;

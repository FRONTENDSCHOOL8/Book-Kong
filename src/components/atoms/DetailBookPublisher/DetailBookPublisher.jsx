import { string, exact } from 'prop-types';

function DetailBookPublisher({ data: bookData }) {
  return (
    <span className="contents-xs-bold text-grayscale-700">
      {bookData.publisher}
    </span>
  );
}

DetailBookPublisher.propTypes = {
  data: exact({
    publisher: string.isRequired,
  }),
};

export default DetailBookPublisher;

import { string, shape } from 'prop-types';
import convertDayFormat from '../../../utils/convertDayFormat';

function DetailBookInfoDate({ data: bookData }) {
  return (
    <>
      <span className="block mt-12 contents-md-bold text-grayscale-900">
        출간일
      </span>
      <p className="mt-4 contents-sm">
        {convertDayFormat(bookData.publication_date)}
      </p>
    </>
  );
}

DetailBookInfoDate.propTypes = {
  data: shape({
    publication_date: string.isRequired,
  }),
};

export default DetailBookInfoDate;

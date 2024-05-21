import { string, exact } from 'prop-types';

function DetailBookAuthor({ data: bookData }) {
  return (
    <span className="contents-sm text-grayscale-500">{bookData.author}</span>
  );
}

DetailBookAuthor.propTypes = {
  data: exact({
    author: string.isRequired,
  }),
};

export default DetailBookAuthor;

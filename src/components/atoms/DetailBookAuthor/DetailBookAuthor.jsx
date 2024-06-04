import { string, shape } from 'prop-types';

function DetailBookAuthor({ data: bookData }) {
  return (
    <span className="contents-sm text-grayscale-500">{bookData.author}</span>
  );
}

DetailBookAuthor.propTypes = {
  data: shape({
    author: string.isRequired,
  }),
};

export default DetailBookAuthor;

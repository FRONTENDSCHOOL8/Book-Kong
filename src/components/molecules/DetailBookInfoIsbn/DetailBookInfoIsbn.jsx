import { string, shape } from 'prop-types';

function DetailBookInfoIsbn({ data: bookData }) {
  return (
    <>
      <span className="block mt-12 contents-md-bold text-grayscale-900">
        ISBN
      </span>
      <p className="mt-4 contents-sm">{bookData.isbn_13}</p>
    </>
  );
}

DetailBookInfoIsbn.propTypes = {
  data: shape({
    isbn_13: string.isRequired,
  }).isRequired,
};

export default DetailBookInfoIsbn;

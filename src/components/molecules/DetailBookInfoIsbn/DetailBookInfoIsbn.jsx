import { string, shape } from 'prop-types';

function DetailBookInfoIsbn({ data: bookData }) {
  return (
    <>
      <span className="block mt-12 contents-md text-grayscale-400">ISBN</span>
      <p className="mt-4 contents-sm">{bookData.isbn_13}</p>
    </>
  );
}

DetailBookInfoIsbn.propTypes = {
  data: shape({
    description: string.isRequired,
  }),
};

export default DetailBookInfoIsbn;

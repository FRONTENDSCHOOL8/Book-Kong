import { string, shape } from 'prop-types';

function DetailBookInfoDate({ data: bookData }) {
  const calculatePublicationDate = (publicDate) => {
    const date = new Date(publicDate);

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const pulicationDate = calculatePublicationDate(bookData.publication_date);

  return (
    <>
      <span className="block mt-12 contents-md-bold text-grayscale-900">
        출간일
      </span>
      <p className="mt-4 contents-sm">{pulicationDate}</p>
    </>
  );
}

DetailBookInfoDate.propTypes = {
  data: shape({
    description: string.isRequired,
  }),
};

export default DetailBookInfoDate;

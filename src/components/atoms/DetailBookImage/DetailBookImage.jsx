import { string, exact } from 'prop-types';
import getPbImage from '../../../utils/getPbImage';

function DetailBookImage({ data: bookData }) {
  return (
    <img
      src={getPbImage({
        collectionId: bookData.collectionId,
        id: bookData.id,
        cover: bookData.cover,
      })}
      alt={bookData.title}
      width={206}
      className="rounded-[4px] book-shadow"
    />
  );
}

DetailBookImage.propTypes = {
  data: exact({
    collectionId: string.isRequired,
    id: string.isRequired,
    cover: string.isRequired,
    status: string.isRequired,
  }).isRequired,
};

export default DetailBookImage;

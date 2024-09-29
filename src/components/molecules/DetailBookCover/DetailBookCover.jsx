import { string, exact } from 'prop-types';
import DetailBookImage from '../../atoms/DetailBookImage/DetailBookImage';
import MediumBookBadge from '../../atoms/MediumBookBadge/MediumBookBadge';

function DetailBookCover({ data: bookData }) {
  return (
    <div className="flex justify-center px-6 py-6">
      <div className="relative">
        <DetailBookImage data={bookData} />
        <MediumBookBadge status={bookData.status} />
      </div>
    </div>
  );
}

DetailBookCover.propTypes = {
  data: exact({
    collectionId: string.isRequired,
    id: string.isRequired,
    cover: string.isRequired,
    status: string.isRequired,
  }).isRequired,
};

export default DetailBookCover;

import { string, shape } from 'prop-types';
import DetailBookAuthor from '../../atoms/DetailBookAuthor/DetailBookAuthor';
import DetailBookPublisher from '../../atoms/DetailBookPublisher/DetailBookPublisher';
import DetailBookName from '../../atoms/DetailBookName/DetailBookName';

function DetailTitle({ data: bookData }) {
  return (
    <div className="flex flex-col items-center gap-2 px-4 py-6">
      <DetailBookName data={bookData} />
      <DetailBookAuthor data={bookData} />
      <DetailBookPublisher data={bookData} />
    </div>
  );
}

DetailTitle.propTypes = {
  data: shape({
    title: string.isRequired,
    author: string.isRequired,
    publisher: string.isRequired,
  }),
};

export default DetailTitle;

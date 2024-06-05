import { string, shape } from 'prop-types';
import DetailBookInfoDesc from '../../atoms/DetailBookInfoDesc/DetailBookInfoDesc';
import DetailBookInfoPage from '../DetailBookInfoPage/DetailBookInfoPage';
import DetailBookInfoIsbn from '../DetailBookInfoIsbn/DetailBookInfoIsbn';
import DetailBookInfoDate from '../DetailBookInfoDate/DetailBookInfoDate';

function DetailBookInfo({ data: bookData }) {
  return (
    <section
      className="before:content-[''] before:block before:pt-[111px] mt-[-111px] border-b"
      id="bookInfo"
    >
      <div className="px-4 pb-8 bg-grayscale-white">
        <h4 className="pt-8 border-t contents-lg-bold text-grayscale-900">
          책 소개
        </h4>
        <DetailBookInfoDesc data={bookData} />
        <DetailBookInfoPage data={bookData} />
        <DetailBookInfoIsbn data={bookData} />
        <DetailBookInfoDate data={bookData} />
      </div>
    </section>
  );
}

DetailBookInfo.propTypes = {
  data: shape({
    description: string.isRequired,
    isbn_13: string.isRequired,
    publication_date: string.isRequired,
  }),
};

export default DetailBookInfo;

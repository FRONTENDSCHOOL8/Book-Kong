import { number, shape } from 'prop-types';

function DetailBookInfoPage({ data: bookData }) {
  return (
    <>
      <span className="block mt-12 contents-md-bold text-grayscale-900">
        쪽 수
      </span>
      <p className="mt-4 contents-sm">{bookData.total_page}쪽</p>
    </>
  );
}

DetailBookInfoPage.propTypes = {
  data: shape({
    total_page: number.isRequired,
  }).isRequired,
};

export default DetailBookInfoPage;

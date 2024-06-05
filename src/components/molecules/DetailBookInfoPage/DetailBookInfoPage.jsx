import { string, shape } from 'prop-types';

function DetailBookInfoPage({ data: bookData }) {
  return (
    <>
      <span className="block mt-12 contents-md text-grayscale-400">쪽 수</span>
      <p className="mt-4 contents-sm">{bookData.total_page}쪽</p>
    </>
  );
}

DetailBookInfoPage.propTypes = {
  data: shape({
    description: string.isRequired,
  }),
};

export default DetailBookInfoPage;
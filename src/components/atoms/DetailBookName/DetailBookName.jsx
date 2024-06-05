import { string, shape } from 'prop-types';

function DetailBookTitle({ data: bookData }) {
  return <p className="contents-lg-bold">{bookData.title}</p>;
}

DetailBookTitle.propTypes = {
  data: shape({
    title: string.isRequired,
  }),
};

export default DetailBookTitle;

import { string, exact } from 'prop-types';

function DetailBookTitle({ data: bookData }) {
  return <p className="contents-md-bold">{bookData.title}</p>;
}

DetailBookTitle.propTypes = {
  data: exact({
    title: string.isRequired,
  }),
};

export default DetailBookTitle;

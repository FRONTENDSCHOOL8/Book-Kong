import { string, shape } from 'prop-types';

function DetailBooKName({ data: bookData }) {
  return <p className="contents-lg-bold">{bookData.title}</p>;
}

DetailBooKName.propTypes = {
  data: shape({
    title: string.isRequired,
  }),
};

export default DetailBooKName;

import { number, shape } from 'prop-types';
import Star from '../../atoms/Star/Star';
import Rate from '../../atoms/Rate/Rate';

function DetailBookStateRateContent({ state: bookData }) {
  return (
    <div className="flex gap-1 text-primary-500 contents-md-bold">
      <Star />
      <Rate>{bookData.score}</Rate>
    </div>
  );
}

DetailBookStateRateContent.propTypes = {
  state: shape({
    score: number,
  }),
};

export default DetailBookStateRateContent;

import { number, shape } from 'prop-types';
import Star from '../../atoms/Star/Star';
import Rate from '../../atoms/Rate/Rate';

function DetailBookStateRateContent({ state: bookState }) {
  return (
    <>
      {bookState.status === '완독' && (
        <div className="flex gap-1 text-primary-500 contents-md-bold">
          <Star />
          <Rate>{bookState.score}</Rate>
        </div>
      )}
      {(bookState.status === '독서중' || bookState.status === '희망 도서') && (
        <div className="flex gap-1 text-primary-500 contents-md-bold">
          <Star />
          <Rate>{bookState.expectation_score}</Rate>
        </div>
      )}
    </>
  );
}

DetailBookStateRateContent.propTypes = {
  state: shape({
    score: number,
  }),
};

export default DetailBookStateRateContent;

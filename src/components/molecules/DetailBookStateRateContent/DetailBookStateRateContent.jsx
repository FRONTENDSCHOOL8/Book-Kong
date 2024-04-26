import {} from 'prop-types';
import Star from '../../atoms/Star/Star';
import Rate from '../../atoms/Rate/Rate';

function DetailBookStateRate() {
  return (
    <div className="flex gap-1 text-primary-500 contents-md-md">
      <Star />
      <Rate>4.5</Rate>
    </div>
  );
}

DetailBookStateRate.propTypes = {};

export default DetailBookStateRate;

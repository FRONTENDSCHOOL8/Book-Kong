import { node } from 'prop-types';
import Label from '../../atoms/Label/Label';
import RatingInput from '../../atoms/RatingInput/RatingInput';

function RatingContainer({ label }) {
  return (
    <div className="flex gap-2 justify-between items-center">
      <Label className="w-16" htmlFor="review">
        {label}
      </Label>
      <RatingInput />
    </div>
  );
}

RatingContainer.propTypes = {
  label: node.isRequired,
};

export default RatingContainer;

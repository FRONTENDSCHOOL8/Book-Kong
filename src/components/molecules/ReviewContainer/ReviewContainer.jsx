import Label from '../../atoms/Label/Label';
import ReviewInput from '../../atoms/ReviewInput/ReviewInput';

function ReviewContainer() {
  return (
    <div className="flex gap-2 justify-between items-center w-full">
      <Label className="w-16" htmlFor="review">
        평점
      </Label>
      <ReviewInput />
    </div>
  );
}

export default ReviewContainer;

import { number } from 'prop-types';

function TotalBookCount({ bookNum: userFinishBookNum }) {
  return (
    <strong className="flex items-baseline contents-2xl-md">
      {userFinishBookNum}
      <span className="ml-1 contents-sm-bold text-grayscale-500 -translate-y-[2px]">
        권
      </span>
    </strong>
  );
}

TotalBookCount.propTypes = {
  bookNum: number,
};

export default TotalBookCount;

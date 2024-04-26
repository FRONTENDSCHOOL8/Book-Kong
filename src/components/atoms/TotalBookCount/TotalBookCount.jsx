import { number } from 'prop-types';

function TotalBookCount({ bookNum: userFinishBookNum }) {
  return (
    <div className="flex items-end gap-2 grow-[2] justify-end">
      <span className="contents-2xl-md text-primary-500">
        {userFinishBookNum}
      </span>
      <span className="contents-md-md text-grayscale-600 align-text-bottom translate-y-[-6px]">
        권
      </span>
    </div>
  );
}

TotalBookCount.propTypes = {
  bookNum: number,
};

export default TotalBookCount;

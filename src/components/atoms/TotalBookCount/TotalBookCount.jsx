import { number } from 'prop-types';

function TotalBookCount({ bookCount }) {
  return (
    <div className="flex items-end gap-2 grow-[2] justify-end">
      <span className="contents-2xl-md text-primary-500">{bookCount}</span>
      <span className="contents-md-bold text-grayscale-600 align-text-bottom translate-y-[-6px]">
        권
      </span>
    </div>
  );
}

TotalBookCount.propTypes = {
  bookCount: number,
};

export default TotalBookCount;

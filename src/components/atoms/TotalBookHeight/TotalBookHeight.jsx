import { number } from 'prop-types';

function TotalBookHeight({ height: userBookHeight }) {
  return (
    <strong className="flex items-baseline contents-2xl-md">
      {userBookHeight}
      <span className="ml-1 contents-md text-grayscale-500">cm</span>
    </strong>
  );
}

TotalBookHeight.propTypes = {
  height: number,
};

export default TotalBookHeight;

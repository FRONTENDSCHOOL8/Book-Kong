import { number } from 'prop-types';

function TotalBookHeight({ height: userBookHeight }) {
  return (
    <div className="flex items-end gap-2 grow">
      <p className="contents-2xl-md text-primary-500">{userBookHeight}</p>
      <p className="contents-md-md text-grayscale-600 translate-y-[-3px]">cm</p>
    </div>
  );
}

TotalBookHeight.propTypes = {
  height: number,
};

export default TotalBookHeight;

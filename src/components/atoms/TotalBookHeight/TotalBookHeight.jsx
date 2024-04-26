import { number } from 'prop-types';
import { calcUserBookHeight } from '../../../utils/calcUserLevel';

// BookInfo에서 받아온 data
function TotalBookHeight({ page: userTotalPage }) {
  // 유틸 함수를 활용하여 계산식을 totalbookHeight에 담아 사용한다.
  const userBookHeight = calcUserBookHeight(userTotalPage);

  return (
    <div className="flex items-end gap-2 grow">
      <p className="contents-2xl-md text-primary-500">{userBookHeight}</p>
      <p className="contents-md-md text-grayscale-600 translate-y-[-3px]">cm</p>
    </div>
  );
}

TotalBookHeight.propTypes = {
  page: number,
};

export default TotalBookHeight;

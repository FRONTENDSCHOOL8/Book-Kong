import { number } from 'prop-types';
import calcCentimeter from '../../../utils/calcCentimeter';

// BookInfo에서 받아온 data
function TotalBookHeight({ page }) {
  // 장당 페이지 높이
  const perPageHeight = 0.005;
  // 소수점 자릿수
  const decimalPlaces = 2;

  // utils 함수를 활용하여 계산식을 totalbookHeight에 담아 사용한다.
  const bookHeight = calcCentimeter(page, perPageHeight, decimalPlaces);

  return (
    <div className="flex items-end gap-2 grow">
      <p className="contents-2xl-md text-primary-500">{bookHeight}</p>
      <p className="contents-md-bold text-grayscale-600 translate-y-[-3px]">
        cm
      </p>
    </div>
  );
}

TotalBookHeight.propTypes = {
  page: number,
};

export default TotalBookHeight;

import { number } from 'prop-types';
import { calcCentimeter } from '../../../utils/calcCentimeter';

// BookInfo에서 받아온 data
function TotalBookHeight({ page }) {
  // utils 함수를 활용하여 계산식을 totalbookHeight에 담아 사용한다.
  let bookHeight = calcCentimeter(page);

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

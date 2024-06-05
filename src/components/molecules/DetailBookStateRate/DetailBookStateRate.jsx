import { number, shape } from 'prop-types';

import DetailBookStateRateContent from '../DetailBookStateRateContent/DetailBookStateRateContent';
import DetailBookStateTitle from '../../atoms/DetailBookStateTitle/DetailBookStateTitle';

function DetailBookStateBox({ state: bookData }) {
  return (
    <div className="flex flex-col items-center gap-3 w-[33.3333%]">
      <DetailBookStateRateContent state={bookData} />
      <DetailBookStateTitle title="별점" />
    </div>
  );
}

DetailBookStateBox.propTypes = {
  state: shape({
    score: number.isRequired,
  }),
};

export default DetailBookStateBox;

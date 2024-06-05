import { number, shape } from 'prop-types';

import DetailBookStateDays from '../DetailBookStateDays/DetailBookStateDays';
import DetailBookStatePeriod from '../DetailBookStatePeriod/DetailBookStatePeriod';
import DetailBookStateRate from '../DetailBookStateRate/DetailBookStateRate';

function DetailBookState({ state: bookState }) {
  return (
    <div className="flex py-3 justify-stretch">
      <DetailBookStateRate state={bookState} />
      <DetailBookStateDays state={bookState} />
      <DetailBookStatePeriod state={bookState} />
    </div>
  );
}

DetailBookState.propTypes = {
  state: shape({
    score: number.isRequired,
  }),
};

export default DetailBookState;

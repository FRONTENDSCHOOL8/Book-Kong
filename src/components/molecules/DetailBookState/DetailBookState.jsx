import { number, shape } from 'prop-types';

import DetailBookStatePeriod from '../DetailBookStatePeriod/DetailBookStatePeriod';
import DetailBookStateRate from '../DetailBookStateRate/DetailBookStateRate';
import DetailBookStateProgress from '../DetailBookStateDays/DetailBookStateDays';

function DetailBookState({ state: bookState }) {
  return (
    <div className="flex py-3 justify-stretch">
      <DetailBookStateRate state={bookState} />
      <DetailBookStateProgress state={bookState} />
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

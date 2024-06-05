import { string, shape } from 'prop-types';

import DetailBookStateTitle from '../../atoms/DetailBookStateTitle/DetailBookStateTitle';
import DetailBookStateProgressContent from '../../atoms/DetailBookStateProgressContent/DetailBookStateProgressContent';

function DetailBookStateProgress({ state: bookState }) {
  return (
    <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
      <DetailBookStateProgressContent state={bookState} />
      <DetailBookStateTitle title="독서 일수" />
    </div>
  );
}

DetailBookStateProgress.propTypes = {
  state: shape({
    start_date: string.isRequired,
    end_date: string.isRequired,
  }),
};

export default DetailBookStateProgress;

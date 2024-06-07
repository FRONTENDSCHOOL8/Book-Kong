import { string, shape } from 'prop-types';

import DetailBookStateTitle from '../../atoms/DetailBookStateTitle/DetailBookStateTitle';
import DetailBookStateProgressContent from '../../atoms/DetailBookStateProgressContent/DetailBookStateProgressContent';

function DetailBookStateProgress({ state: bookState }) {
  return (
    <>
      {bookState.status === '완독' && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
          <DetailBookStateProgressContent state={bookState} />
          <DetailBookStateTitle title="독서 일수" />
        </div>
      )}
      {bookState.status === '독서중' && (
        <div className="flex flex-col items-center gap-3 w-[33.3333%] border-l border-grayscale-100">
          <DetailBookStateProgressContent state={bookState} />
          <DetailBookStateTitle title="읽는 중" />
        </div>
      )}
      {bookState.status === '희망 도서' && (
        <div className="hidden">
          <DetailBookStateProgressContent state={bookState} />
          <DetailBookStateTitle />
        </div>
      )}
    </>
  );
}

DetailBookStateProgress.propTypes = {
  state: shape({
    start_date: string.isRequired,
    end_date: string.isRequired,
  }),
};

export default DetailBookStateProgress;

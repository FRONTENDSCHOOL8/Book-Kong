import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import convertDayFormat from '../../../utils/convertDayFormat';

function CardInfo({ data }) {
  const { pathname: currentPage } = useLocation();
  return (
    <div className="flex flex-col justify-between py-4 pr-6 pl-4 w-full">
      <div className="flex flex-col gap-1">
        <h3 className="contents-sm-md clip-text-2">{data.title}</h3>
        <p className="contents-xs text-grayscale-400 clip-text-1">
          {data.author}
        </p>
      </div>
      {currentPage === '/library/book-search' && (
        <span className="contents-xs text-grayscale-700 clip-text-1">
          {data.publisher}
        </span>
      )}
      {currentPage === '/library/bookshelf' && (
        <div className="relative w-full">
          <div className="absolute left-0 bottom-0">
            {data.status === '독서중' && (
              <>
                {data.expectation_score && (
                  <img
                    src={`/images/rate/before/beforerate=${data.expectation_score}.png`}
                  />
                )}
              </>
            )}
            {data.status === '희망 도서' && (
              <>
                {data.expectation_score && (
                  <img
                    src={`/images/rate/before/beforerate=${data.expectation_score}.png`}
                  />
                )}
              </>
            )}
            {data.status === '완독' && (
              <>
                {data.score && (
                  <img src={`/images/rate/after/afterrate=${data.score}.png`} />
                )}
              </>
            )}
          </div>
          <div className="flex gap-1 items-center absolute right-0 bottom-0 ">
            {data.status === '완독' && (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M5.08929 0.625C5.53376 0.625 5.89286 0.991577 5.89286 1.44531V2.26562H9.10714V1.44531C9.10714 0.991577 9.46624 0.625 9.91071 0.625C10.3552 0.625 10.7143 0.991577 10.7143 1.44531V2.26562H11.9196C12.5851 2.26562 13.125 2.81677 13.125 3.49609V4.72656H1.875V3.49609C1.875 2.81677 2.4149 2.26562 3.08036 2.26562H4.28571V1.44531C4.28571 0.991577 4.64481 0.625 5.08929 0.625ZM1.875 5.54688H13.125V12.5195C13.125 13.1989 12.5851 13.75 11.9196 13.75H3.08036C2.4149 13.75 1.875 13.1989 1.875 12.5195V5.54688ZM10.1367 8.4436C10.3728 8.20264 10.3728 7.81299 10.1367 7.57458C9.90067 7.33618 9.51897 7.33362 9.28544 7.57458L6.89983 10.0099L5.71959 8.80505C5.48354 8.56409 5.10184 8.56409 4.8683 8.80505C4.63477 9.04602 4.63225 9.43567 4.8683 9.67407L6.47545 11.3147C6.7115 11.5557 7.09319 11.5557 7.32673 11.3147L10.1367 8.4436Z"
                    fill="#4E8AFF"
                  />
                </svg>
                <span className="contents-2xs text-grayscale-400">
                  {convertDayFormat(data.end_date)}
                </span>
              </>
            )}
            {data.status === '독서중' && (
              <>
                {data.read_page !== 0 && (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                    >
                      <path
                        d="M5.15625 3.59375C5.15625 2.97215 5.40318 2.37601 5.84272 1.93647C6.28226 1.49693 6.8784 1.25 7.5 1.25C8.1216 1.25 8.71774 1.49693 9.15728 1.93647C9.59682 2.37601 9.84375 2.97215 9.84375 3.59375C9.84375 4.21535 9.59682 4.81149 9.15728 5.25103C8.71774 5.69057 8.1216 5.9375 7.5 5.9375C6.8784 5.9375 6.28226 5.69057 5.84272 5.25103C5.40318 4.81149 5.15625 4.21535 5.15625 3.59375ZM7.10938 7.30469V13.75L5.92773 13.1592C5.41748 12.9053 4.86572 12.7441 4.29688 12.688L1.95312 12.4536C1.55518 12.4121 1.25 12.0776 1.25 11.6748V6.71875C1.25 6.28662 1.59912 5.9375 2.03125 5.9375H2.771C4.32373 5.9375 5.8374 6.41602 7.10938 7.30469ZM7.89062 13.75V7.30469C9.1626 6.41602 10.6763 5.9375 12.229 5.9375H12.9688C13.4009 5.9375 13.75 6.28662 13.75 6.71875V11.6748C13.75 12.0752 13.4448 12.4121 13.0469 12.4512L10.7031 12.6855C10.1367 12.7417 9.58252 12.9028 9.07227 13.1567L7.89062 13.75Z"
                        fill="#E5A038"
                      />
                    </svg>
                    <span className="contents-2xs text-grayscale-700">
                      {data.read_page} 쪽 / {data.total_page} 쪽
                    </span>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

CardInfo.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardInfo;

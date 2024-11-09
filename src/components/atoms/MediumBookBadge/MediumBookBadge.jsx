import { string } from 'prop-types';

function MediumBookBadge({ status }) {
  return (
    <span
      className={`px-4 py-1 ${status === '독서중' && 'bg-badge-yellow'} ${status === '완독' && 'bg-badge-skyblue'} ${status === '희망 도서' && 'bg-badge-purple'} rounded-tr-[4px] rounded-br-[4px] text-center text-grayscale-white badge-shadowborder-grayscale-white contents-sm-bold absolute right-[-40px] top-4 border-2`}
    >
      {status}
    </span>
  );
}

MediumBookBadge.propTypes = {
  status: string.isRequired,
};

export default MediumBookBadge;

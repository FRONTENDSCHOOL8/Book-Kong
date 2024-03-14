import PropTypes from "prop-types";

function MediumBookBadge({ data }) {
  return (
    <>
      <span
        className={`px-4 py-1 ${data === '독서중' && 'bg-badge-yellow'} ${data === '완독' && 'bg-badge-skyblue'} ${data === '희망 도서' && 'bg-badge-purple'} rounded-tr-[4px] rounded-br-[4px] text-center text-grayscale-white badge-shadow border border-grayscale-white contents-sm-bold absolute right-[-40px] top-4 border-2`}
      >
        {data}
      </span>
    </>
  );
}

MediumBookBadge.propTypes = { 
  data: PropTypes.object
 };

export default MediumBookBadge;
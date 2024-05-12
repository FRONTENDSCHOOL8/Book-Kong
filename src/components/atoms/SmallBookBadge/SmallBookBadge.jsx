import PropTypes from 'prop-types';

function SmallBookBadge({ data }) {
  return (
    <>
      <span
        className={`py-[2px] px-2 ${data.status === '독서중' && 'bg-badge-yellow'} ${data.status === '완독' && 'bg-badge-skyblue'} ${data.status === '희망 도서' && 'bg-badge-purple'} rounded-[4px] text-center text-grayscale-white badge-shadow border border-grayscale-white contents-xs-md absolute bottom-[10px] left-2`}
      >
        {data.status}
      </span>
    </>
  );
}

SmallBookBadge.propTypes = {
  data: PropTypes.object,
};

export default SmallBookBadge;

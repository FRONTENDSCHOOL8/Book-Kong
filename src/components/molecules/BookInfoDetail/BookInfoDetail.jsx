import PropTypes from 'prop-types';

function BookInfoDetail({ status }) {
  return (
    <>
      {status === '완독' && <div>완독입니당</div>}
      {status === '독서중' && <div>독서중입니당</div>}
      {status === '희망 도서' && <div>희망 도서입니당</div>}
    </>
  );
}

BookInfoDetail.propTypes = { status: PropTypes.string.isRequired };

export default BookInfoDetail;

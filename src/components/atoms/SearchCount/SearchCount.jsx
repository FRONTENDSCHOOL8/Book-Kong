import PropTypes from 'prop-types';

function SearchCount() {
  return (
    <span className="contents-sm text-grayscale-700 block mt-6">
      검색결과 <strong className="contents-sm text-primary-500">허</strong>건
    </span>
  );
}

SearchCount.propTypes = {};

export default SearchCount;

import PropTypes from 'prop-types';

function SearchCount({ query, totalResults, isLoading }) {
  return (
    <>
      {!(query === '') ? (
        <span className="text-center contents-sm text-grayscale-700 block mt-8 mb-8">
          &quot;{query}&quot;에 대한 검색결과{' '}
          <strong className="contents-sm text-primary-500">
            {totalResults}
          </strong>
          {!isLoading && '건'}
          {isLoading && '로딩중'}
        </span>
      ) : (
        <span className="text-center contents-sm text-grayscale-700 block mt-8">
          검색어를 입력해주세요.
        </span>
      )}
    </>
  );
}

SearchCount.propTypes = {
  query: PropTypes.string.isRequired,
  totalResults: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
};

export default SearchCount;

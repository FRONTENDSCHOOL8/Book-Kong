import { string, number, bool } from 'prop-types';

function SearchInfo({ query, totalResults, isLoading }) {
  return (
    <>
      {!(query === '') ? (
        <span className="text-center contents-sm text-grayscale-700 block mt-8 mb-8">
          &quot;{query}&quot;에 대한 검색 결과{' '}
          <strong className="contents-sm text-primary-500">
            {totalResults}
          </strong>
          {!isLoading && ' 건'}
          {isLoading && '로딩 중'}
        </span>
      ) : (
        <span className="text-center contents-sm text-grayscale-700 block mt-8">
          검색어를 입력해주세요.
        </span>
      )}
    </>
  );
}

SearchInfo.propTypes = {
  query: string.isRequired,
  totalResults: number,
  isLoading: bool.isRequired,
};

export default SearchInfo;

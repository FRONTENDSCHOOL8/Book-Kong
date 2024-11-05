import { string, func } from 'prop-types';

function SearchInput({ query, onChange }) {
  return (
    <input
      value={query}
      onChange={onChange}
      className="contents-sm text-grayscale-900 outline-none bg-transparent flex-grow"
      placeholder="책 제목을 입력해주세요"
    />
  );
}

SearchInput.propTypes = {
  query: string.isRequired,
  onChange: func.isRequired,
};

export default SearchInput;

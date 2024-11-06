import { string, func, oneOf } from 'prop-types';

function SearchInput({ query, onChange, pgName }) {
  const placeholder =
    {
      bookshelf: '책장에서 내 책을 찾아보세요.',
      'book-search': '새로운 책을 찾아보세요!',
    }[pgName] ?? '';

  return (
    <input
      value={query}
      onChange={onChange}
      className="contents-sm text-grayscale-900 outline-none bg-transparent flex-grow"
      placeholder={placeholder}
    />
  );
}

SearchInput.propTypes = {
  query: string.isRequired,
  onChange: func.isRequired,
  pgName: oneOf('bookshelf', 'book-search'),
};

export default SearchInput;

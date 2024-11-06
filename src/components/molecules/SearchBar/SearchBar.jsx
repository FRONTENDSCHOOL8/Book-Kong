import { string, func } from 'prop-types';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchIcon from '../../atoms/SearchIcon/SearchIcon';

function SearchBar({ query, onQueryChange }) {
  return (
    <form className="bg-primary-50 w-full flex justify-between items-center gap-2 rounded border border-primary-500 px-3 py-2 ">
      <SearchIcon />
      <SearchInput query={query} onChange={onQueryChange} />
    </form>
  );
}

SearchBar.propTypes = {
  query: string.isRequired,
  onQueryChange: func.isRequired,
};

export default SearchBar;

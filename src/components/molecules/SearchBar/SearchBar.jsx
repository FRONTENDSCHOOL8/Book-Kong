import { func } from 'prop-types';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-primary-50 w-full flex justify-center items-center flex-shrink-0 rounded border border-primary-500 px-3 py-2 "
    >
      <SearchInput keyword={keyword} onChange={handleChange} />
      <SearchButton />
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: func.isRequired,
};

export default SearchBar;

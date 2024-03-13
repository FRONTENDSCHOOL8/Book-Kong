import PropTypes from 'prop-types';
import InputBar from '../../atoms/InputBar/InputBar';
import SearchButton from '../../atoms/SearchButton/SearchButton';
import { useState } from 'react';

function SearchBar({ onSubmit }) {
  const [keyword, setKeyword] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
    return;
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-primary-50 w-full flex justify-center items-center flex-shrink-0 rounded-[4px] border-[1px] border-primary-500 px-3 py-2 "
    >
      <InputBar keyword={keyword} onChange={handleChange} />
      <SearchButton />
    </form>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

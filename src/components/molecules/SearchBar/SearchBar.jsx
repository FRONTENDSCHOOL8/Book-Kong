import InputBar from '../../atoms/InputBar/InputBar';
import SearchButton from '../../atoms/SearchButton/SearchButton';

function SearchBar() {
  return (
    <form className="bg-primary-50 w-full flex justify-center items-center flex-shrink-0 rounded-[4px] border-[1px] border-primary-500 px-3 py-2 ">
      <InputBar />
      <SearchButton />
    </form>
  );
}

SearchBar.propTypes = {};

export default SearchBar;

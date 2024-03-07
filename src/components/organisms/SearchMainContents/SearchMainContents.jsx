import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchCount from '../../atoms/SearchCount/SearchCount';
import SearchList from '../SearchList/SearchList';

function SearchMainContents() {
  return (
    <main className="px-4 pt-6 bg-background-gray h-[130vh]">
      <SearchBar />
      <SearchCount />
      <SearchList />
    </main>
  );
}

export default SearchMainContents;

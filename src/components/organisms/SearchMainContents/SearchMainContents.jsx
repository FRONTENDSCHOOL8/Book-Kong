import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchCount from '../../atoms/SearchCount/SearchCount';
import SearchList from '../SearchList/SearchList';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBookData } from '../../../api/searchAladin';

function SearchMainContents() {
  const [keyword, setKeyword] = useState('');
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newKeyword = keyword.trim();
    setQuery(newKeyword);
    setKeyword('');
  };

  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: async () => getBookData(query),
    staleTime: 1000 * 60 * 15,
  });

  return (
    <main className="px-4 pt-6 pb-[200px] overflow-scroll h-screen">
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <SearchCount
        query={query}
        totalResults={data?.totalResults}
        isLoading={isLoading}
      />
      <SearchList data={data?.item} />
    </main>
  );
}

export default SearchMainContents;

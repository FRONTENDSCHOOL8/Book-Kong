import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchCount from '../../atoms/SearchCount/SearchCount';
import List from '../List/List';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBookData } from '../../../api/searchAladin';

function SearchMainContents() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: async () => getBookData(query),
    staleTime: 1000 * 60 * 15,
  });

  return (
    <main className="px-4 pt-[81px] pb-[200px] overflow-scroll h-screen">
      <SearchBar onSubmit={handleSubmit} />
      <SearchCount
        query={query}
        totalResults={data?.totalResults}
        isLoading={isLoading}
      />
      <List data={data?.item} />
    </main>
  );
}

export default SearchMainContents;

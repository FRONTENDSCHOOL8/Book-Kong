import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { getBookData } from '../../../api/searchAladin';
import SearchCount from '../../atoms/SearchCount/SearchCount';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchList from '../SearchList/SearchList';

function SearchMainContents() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search', query],
      queryFn: ({ pageParam }) => getBookData(query, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.current_page + 1;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <main className="px-4 pt-[81px] pb-[200px] overflow-scroll h-screen">
      <SearchBar onSubmit={handleSubmit} />
      <SearchCount
        query={query}
        totalResults={data?.pages[0].page_data.totalResults}
        isLoading={isLoading}
      />
      <SearchList data={data?.pages} />
      <div ref={hasNextPage ? ref : undefined}>
        {isFetchingNextPage ? (
          <p>Loading more...</p>
        ) : hasNextPage ? (
          <p>Load more</p>
        ) : (
          <p>No more items</p>
        )}
      </div>
    </main>
  );
}

export default SearchMainContents;

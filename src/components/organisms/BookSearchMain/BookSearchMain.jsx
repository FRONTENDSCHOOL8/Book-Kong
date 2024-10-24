import SearchBar from '../../molecules/SearchBar/SearchBar';
import SearchInfo from '../../atoms/SearchInfo/SearchInfo';
import { useState, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { getAladinReqData } from '../../../api/searchAladin';
import SearchList from '../SearchList/SearchList';
import { Link } from 'react-router-dom';

function BookSearchMain() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['search', query],
      queryFn: ({ pageParam }) => getAladinReqData(query, pageParam),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        if (lastPage && 'current_page' in lastPage) {
          return lastPage.current_page + 1;
        }
        return undefined;
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && query !== '') {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage, query]);

  return (
    <main className="relative px-4 pt-[81px] pb-[200px] overflow-scroll h-screen hide-scrollbar">
      <SearchBar onSubmit={handleSubmit} />
      {query === '' ? (
        <div className="flex flex-col justify-center items-center absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          <img className="w-24" src="/images/characters/locked.png" alt="" />
          <span className="text-grayscale-500 text-content-small">
            책을 검색하여 책장에 추가해보세요.
          </span>
        </div>
      ) : data?.pages[0].page_data.totalResults !== 0 ? (
        <>
          <SearchInfo
            query={query}
            totalResults={data?.pages[0].page_data.totalResults}
            isLoading={isLoading}
          />
          <SearchList data={data?.pages} />
          <div ref={hasNextPage ? ref : undefined}>
            {isFetchingNextPage ? (
              <p>불러오는 중...</p>
            ) : hasNextPage ? (
              <p></p>
            ) : (
              <p></p>
            )}
          </div>
        </>
      ) : (
        <>
          <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col text-grayscale-500 text-content-small text-center gap-8">
            <span>검색 내역이 없어요.</span>
            <div className="flex flex-col">
              <span>해당 책이 없다면 책 정보를</span>
              <span>직접 입력하여 추가할 수 있답니다!</span>
            </div>
            <Link
              to="/library/book-registration"
              className="text-primary-500 underline underline-offset-4"
            >
              직접 입력하기
            </Link>
          </div>
        </>
      )}
    </main>
  );
}

export default BookSearchMain;

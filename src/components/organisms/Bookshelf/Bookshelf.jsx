import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Filter from '../../molecules/Filter/Filter';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { Skeleton } from '@mui/material';
import BookShelfList from '../BookShelfList/BookShelfList';
import { useBookshelfData } from '../../../hooks/useBookshelfData';

function Bookshelf() {
  const [filter, setFilter] = useState('전체');
  const [query, setQuery] = useState('');
  const { data } = useBookshelfData(query);

  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    setFilter(button.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen hide-scrollbar">
      <Helmet>
        <title>책콩 | 서재 페이지 - 책장</title>
      </Helmet>
      {isLoading ? (
        <>
          <Skeleton variant="rounded">
            <SearchBar onSubmit={handleSubmit} />
          </Skeleton>
          <Filter onClick={handleClick} filter={filter} isLoading={isLoading} />
          <BookShelfList
            data={
              filter === '전체'
                ? data
                : data?.filter((data) => data.status === filter)
            }
          />
        </>
      ) : (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <Filter onClick={handleClick} filter={filter} />
          <BookShelfList
            data={
              filter === '전체'
                ? data
                : data?.filter((data) => data.status === filter)
            }
          />
        </>
      )}
    </main>
  );
}

export default Bookshelf;

import { useState } from 'react';
import { Skeleton } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import UserBookList from '../UserBookList/UserBookList';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import useUserLibData from '../../../hooks/useUserLibData';
import BookFilterBox from '../../molecules/BookFilterBox/BookFilterBox';

function Bookshelf() {
  const [filterType, setFilterType] = useState('전체');
  const [query, setQuery] = useState('');
  const { data, isLoading, isStale, refetch } = useUserLibData(query);

  if (isStale) refetch();

  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    setFilterType(button.innerText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newKeyword = e.target[0].value.trim();
    setQuery(newKeyword);
  };

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen hide-scrollbar">
      <Helmet>
        <title>책콩 | 서재 - 책장</title>
      </Helmet>
      {isLoading ? (
        <>
          <Skeleton variant="rounded">
            <SearchBar onSubmit={handleSubmit} />
          </Skeleton>
          <BookFilterBox
            onClick={handleClick}
            filter={filterType}
            isLoading={isLoading}
          />
          <UserBookList
            data={
              filterType === '전체'
                ? data
                : data?.filter((record) => record.status === filterType)
            }
          />
        </>
      ) : (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <BookFilterBox onClick={handleClick} filter={filterType} />
          <UserBookList
            data={
              filterType === '전체'
                ? data
                : data?.filter((record) => record.status === filterType)
            }
          />
        </>
      )}
    </main>
  );
}

export default Bookshelf;

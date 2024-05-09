import { useState } from 'react';
import BookFilterContainer from '../../molecules/BookFilterContainer/BookFilterContainer';
import { Helmet } from 'react-helmet-async';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import { Skeleton } from '@mui/material';
import BookShelfList from '../BookShelfList/BookShelfList';
import { useBookshelfData } from '../../../hooks/useBookshelfData';

function Bookshelf() {
  const [filterType, setFilterType] = useState('전체');
  const [query, setQuery] = useState('');
  const { data, isLoading } = useBookshelfData(query);

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
          <BookFilterContainer
            onClick={handleClick}
            filter={filterType}
            isLoading={isLoading}
          />
          <BookShelfList
            data={
              filterType === '전체'
                ? data
                : data?.filter((data) => data.status === filterType)
            }
          />
        </>
      ) : (
        <>
          <SearchBar onSubmit={handleSubmit} />
          <BookFilterContainer onClick={handleClick} filter={filterType} />
          <BookShelfList
            data={
              filterType === '전체'
                ? data
                : data?.filter((data) => data.status === filterType)
            }
          />
        </>
      )}
    </main>
  );
}

export default Bookshelf;

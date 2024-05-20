import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UserBookList from '../UserBookList/UserBookList';
import useUserLibData from '../../../hooks/useUserLibData';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import BookFilterBox from '../../molecules/BookFilterBox/BookFilterBox';

function Bookshelf() {
  const [filterType, setFilterType] = useState('전체');
  const [query, setQuery] = useState('');
  const { data, isLoading, error, failureCount, failureReason } =
    useUserLibData(query);

  if (failureCount >= 1 && failureReason.startsWith('Server')) throw error;

  if (failureCount === 4) throw error;

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
      <SearchBar onSubmit={handleSubmit} />
      <BookFilterBox onClick={handleClick} filter={filterType} />
      <UserBookList
        data={
          filterType === '전체'
            ? data
            : data?.filter((record) => record.status === filterType)
        }
        isLoading={isLoading}
      />
    </main>
  );
}

export default Bookshelf;

import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import UserBookList from '../UserBookList/UserBookList';
import useUserLibData from '../../../hooks/useUserLibData';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ReadingStateFilter from '../../molecules/ReadingStateFilter/ReadingStateFilter';

function Bookshelf() {
  const [readingState, setReadingState] = useState('전체');
  const [query, setQuery] = useState('');
  const { data, isLoading, error, failureCount, failureReason } =
    useUserLibData(query);

  if (failureCount >= 1 && failureReason.message.startsWith('Server'))
    throw error;

  if (failureCount === 4) throw error;

  const handleClick = (e) => {
    const button = e.target.closest('button');
    if (!button) return;

    setReadingState(button.innerText);
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
      <ReadingStateFilter onClick={handleClick} readingState={readingState} />
      <UserBookList
        data={
          readingState === '전체'
            ? data
            : data?.filter((record) => record.status === readingState)
        }
        isLoading={isLoading}
      />
    </main>
  );
}

export default Bookshelf;

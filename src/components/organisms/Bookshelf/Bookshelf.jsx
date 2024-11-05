import { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import UserBookList from '../UserBookList/UserBookList';
import SearchBar from '../../molecules/SearchBar/SearchBar';
import ReadingStateFilter from '../../molecules/ReadingStateFilter/ReadingStateFilter';
import { getAllUserLibRecs } from '../../../utils/controlBookData';
import { loginUserData } from '../../../utils/controlUserData';
import { useQuery } from '@tanstack/react-query';
import debounce from '../../../utils/debounce';

function Bookshelf() {
  const [readingState, setReadingState] = useState('전체');
  const [localQuery, setLocalQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const { data, isLoading, error, failureCount, failureReason } = useQuery({
    queryKey: ['library', loginUserData],
    queryFn: getAllUserLibRecs,
    select: (userLibRecs) => {
      if (debouncedQuery === '') return userLibRecs;
      else
        return userLibRecs.filter((userLibRec) =>
          userLibRec.title.includes(debouncedQuery)
        );
    },
  });

  if (failureCount >= 1 && failureReason.message.startsWith('Server'))
    throw error;

  if (failureCount === 4) throw error;

  const handleClick = useCallback((e) => {
    const button = e.target.closest('button');

    if (!button) return;

    setReadingState(button.innerText);
  }, []);

  const updateDebouncedQuery = debounce(
    useCallback((query) => {
      setDebouncedQuery(query);
    }, [])
  );

  const handleChange = useCallback(
    (e) => {
      setLocalQuery(e.target.value);
      updateDebouncedQuery(e.target.value);
    },
    [updateDebouncedQuery]
  );

  return (
    <main className="px-4 pt-[129px] pb-[120px] overflow-scroll h-screen hide-scrollbar">
      <Helmet>
        <title>책콩 | 서재 - 책장</title>
      </Helmet>
      <SearchBar query={localQuery} onChange={handleChange} />
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
